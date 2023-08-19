import React, {useEffect} from 'react';
import {Controller, FieldError, UseControllerProps} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import {useErrorMessage} from 'src/hooks';

import {styles} from './styles';

export type IMyTextInput = {
  title: string;
  placeholder: string;
  errorType?: FieldError['type'];
} & UseControllerProps;

export const MyTextInput: React.FC<IMyTextInput> = React.memo(
  ({name, title, rules, control, placeholder, errorType}) => {
    const {ErrorTextMessages} = useErrorMessage();

    useEffect(() => {
      console.log(errorType);
    }, [errorType]);

    return (
      <View style={styles().container}>
        <Text style={styles().title}>{title}</Text>
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
            />
          )}
        />
        {errorType && (
          <Text style={styles().errorText}>
            {ErrorTextMessages({type: errorType})}
          </Text>
        )}
      </View>
    );
  },
);
