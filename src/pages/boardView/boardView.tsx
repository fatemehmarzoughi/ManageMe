import BottomSheet from '@gorhom/bottom-sheet';
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {FieldError, useForm} from 'react-hook-form';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from 'src/AppRoute';
import {MyTextInput} from 'src/components';

import {StatusList} from './statusList';
import {styles} from './styles';

export const BoardView: React.FC = React.memo(() => {
  const route = useRoute<RouteProp<RootStackParamList, 'BoardView'>>();
  const themeId = route.params.themeId;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();

  // for test
  const statusList = [{}, {}];

  const onSaveNewStatusList = useCallback(data => {
    console.log(data);
    bottomSheetRef.current?.close();
  }, []);

  return (
    <>
      <FlatList
        data={statusList} // statusLists list
        horizontal
        style={styles(themeId).container}
        renderItem={({item: list, index}) => {
          if (index + 1 === statusList.length) {
            return (
              <>
                <StatusList themeId={themeId} />
                {/* Create New Status List */}
                <TouchableOpacity
                  style={styles(themeId).statusList}
                  onPress={() => setIsOpen(prev => !prev)}>
                  <View
                    style={[
                      styles(themeId).statusListHeader,
                      styles(themeId).newStatusListHeader,
                    ]}>
                    <Text style={styles(themeId).text}>Create New List</Text>
                    <Icon name="add" size={25} color="white" />
                  </View>
                </TouchableOpacity>
              </>
            );
          }
          return <StatusList themeId={themeId} />;
        }}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={isOpen ? 0 : -1}
        snapPoints={['30%']}
        enableOverDrag
        enablePanDownToClose
        onChange={() => {}}>
        <View style={styles(themeId).bottomSheetContainer}>
          <MyTextInput
            control={control}
            name="title"
            title="Choose a title"
            placeholder="TO DO"
            rules={{required: true, minLength: 3, maxLength: 20}}
            errorType={errors.title?.type as FieldError['type']}
          />
          <TouchableOpacity
            disabled={!!errors.title}
            style={[
              styles(themeId).button,
              errors.title ? styles(themeId).disabledButton : null,
            ]}
            onPress={handleSubmit(onSaveNewStatusList)}>
            <Text style={styles(themeId).buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
});
