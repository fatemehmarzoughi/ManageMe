import {useCallback} from 'react';
import {FieldError} from 'react-hook-form';

export type ErrorTypes = FieldError['type'];

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
