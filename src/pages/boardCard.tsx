import LottieView from 'lottie-react-native';
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BoardObjectType} from 'src/configs';
import {generalStyles} from 'src/constants';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';

import {styles} from './styles';

export type TitleForm = {
  title: string;
};

export type BoardCardProps = {
  item: BoardObjectType & Realm.Object<BoardObjectType, never>;
  isEditing: boolean;
  setPressedItemId: Dispatch<SetStateAction<string | false>>;
  pressedItemId: string | false;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

export const BoardCard: React.FC<BoardCardProps> = React.memo(
  ({
    item,
    pressedItemId,
    isEditing,
    setPressedItemId,
    setIsModalOpen,
    setIsEditing,
  }) => {
    const {realm, deleteObject} = useRealmCRUD();

    const {
      control,
      handleSubmit,
      formState: {errors},
    } = useForm<TitleForm>();

    const ErrorTextMessages = useMemo(() => {
      let text;
      switch (errors.title?.type) {
        case 'maxLength':
          text = 'title cannot be more than 50 letters';
          break;
        case 'minLength':
          text = 'title cannot be less than 3 letters';
          break;
        case 'required':
          text = 'title is required';
          break;

        default:
          text = '';
          break;
      }

      return <Text style={generalStyles.errorText}>{text}</Text>;
    }, [errors.title?.type]);

    const saveEdits = useCallback(
      data => {
        console.log(data);
        if (pressedItemId) {
          const i = realm.objectForPrimaryKey('Board', pressedItemId);

          if (i && i?.isValid()) {
            realm.write(() => {
              (i as unknown as BoardObjectType).title = data.title;
            });
            //edit
            console.log('edited');
          }
          setIsModalOpen(false);
        }

        setIsEditing(false);
      },
      [pressedItemId, realm, setIsEditing, setIsModalOpen],
    );

    return (
      <TouchableOpacity style={styles.card}>
        <View style={[styles.cardTitle, generalStyles.centrism]}>
          {pressedItemId === item.id && isEditing ? (
            <View style={styles.editLabelView}>
              <View style={styles.textInputErrorView}>
                <Controller
                  control={control}
                  name="title"
                  rules={{maxLength: 50, minLength: 3, required: true}}
                  render={({field: {onChange, value, onBlur}}) => (
                    <TextInput
                      autoFocus
                      style={[styles.cardText, styles.editLabelTextInput]}
                      placeholder={item.title}
                      placeholderTextColor={'white'}
                      maxLength={50}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                {ErrorTextMessages}
              </View>
              <TouchableOpacity
                disabled={Boolean(errors.title?.type)}
                onPress={handleSubmit(saveEdits)}>
                <Icon name="checkmark-outline" size={20} color="green" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsEditing(false);
                }}>
                <Icon name="close-outline" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.cardText}>{item.title}</Text>
          )}
          <Icon
            name="apps-outline"
            style={{alignSelf: 'start'}}
            size={25}
            color="white"
          />
        </View>
        <LottieView
          loop={false}
          autoPlay={true}
          source={require('../assets/animations/books.json')}
          style={styles.cardPic}
        />
        <TouchableOpacity
          style={styles.cardOptions}
          onPress={() => {
            setPressedItemId(item.id);
            setIsModalOpen(true);
          }}>
          <Icon name="ellipsis-vertical-outline" color="white" size={15} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  },
);
