import {useCallback} from 'react';
import {LiteralUnion} from 'react-hook-form';

export type ErrorTypes =
  | LiteralUnion<
      | 'maxLength'
      | 'minLength'
      | 'required'
      | 'pattern'
      | 'min'
      | 'max'
      | 'validate'
      | 'value'
      | 'setValueAs'
      | 'shouldUnregister'
      | 'onChange'
      | 'onBlur'
      | 'disabled'
      | 'deps'
      | 'valueAsNumber'
      | 'valueAsDate',
      string
    >
  | undefined;

export const useErrorMessage = () => {
  const ErrorTextMessages = useCallback(({type}: {type: ErrorTypes}) => {
    let text;
    switch (type) {
      case 'maxLength':
        text = 'Cannot be more than 50 letters';
        break;
      case 'minLength':
        text = 'Cannot be less than 3 letters';
        break;
      case 'required':
        text = 'Title is required';
        break;

      default:
        text = '';
        break;
    }

    return text;
  }, []);

  return {ErrorTextMessages};
};
