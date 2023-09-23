import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import React, {useRef} from 'react';
import {FieldError, FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {Text, TouchableOpacity, View} from 'react-native';
import {IMyTextInput, MyTextInput} from 'src/components';
import {fullWidth} from 'src/constants';

import {styles} from './styles';

export type IBottomSheetForm = {
  title: string;
  themeId: string;
  isOpen: boolean;
  onSave: SubmitHandler<FieldValues>;
  inputFields: Omit<IMyTextInput, 'control' | 'errorType'>[];
  bottomSheetRef?: React.RefObject<BottomSheetMethods>;
  otherProps?: Partial<Omit<BottomSheetProps, 'children'>>;
};

export const BottomSheetForm: React.FC<IBottomSheetForm> = React.memo(
  ({
    inputFields,
    isOpen,
    onSave,
    themeId,
    bottomSheetRef,
    otherProps,
    title,
  }) => {
    const {
      handleSubmit,
      control,
      formState: {errors},
    } = useForm();

    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={isOpen ? 0 : -1}
        snapPoints={['70%', '100%']}
        enableOverDrag
        style={{width: fullWidth}}
        detached
        activeOffsetY={10}
        enablePanDownToClose
        {...otherProps}>
        <View style={styles(themeId).bottomSheetContainer}>
          <Text style={styles(themeId).title}>{title}</Text>
          {inputFields.map(input => (
            <MyTextInput
              control={control}
              errorType={errors?.[`${input.name}`]?.type as FieldError['type']}
              {...input}
            />
          ))}
          <TouchableOpacity
            disabled={!!errors.title || !!errors.description}
            style={[
              styles(themeId).button,
              errors.title ? styles(themeId).disabledButton : null,
            ]}
            onPress={handleSubmit(onSave)}>
            <Text style={styles(themeId).buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    );
  },
);
