import React, {useEffect} from 'react';
import {Controller, FieldError, UseControllerProps} from 'react-hook-form';
import {
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  View,
  ViewProps,
} from 'react-native';
import {useErrorMessage} from 'src/hooks';

import {styles} from './styles';

export type IMyTextInput = {
  title?: string;
  placeholder: string;
  errorType?: FieldError['type'];
  props?: {
    root?: ViewProps;
    textInputProps?: TextInputProps;
    errorTextProps?: TextProps;
  };
} & UseControllerProps;

export const MyTextInput: React.FC<IMyTextInput> = React.memo(
  ({name, title, rules, control, placeholder, errorType, props}) => {
    const {ErrorTextMessages} = useErrorMessage();

    useEffect(() => {
      console.log(errorType);
    }, [errorType]);

    return (
      <View style={styles().container} {...props?.root}>
        {title && <Text style={styles().title}>{title}</Text>}
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({field: {onChange, name, value}}) => (
            <TextInput
              focusable
              autoFocus
              placeholder={placeholder}
              onChangeText={onChange}
              value={value}
              {...props?.textInputProps}
            />
          )}
        />
        {errorType && (
          <Text style={styles().errorText} {...props?.errorTextProps}>
            {ErrorTextMessages({type: errorType})}
          </Text>
        )}
      </View>
    );
  },
);
