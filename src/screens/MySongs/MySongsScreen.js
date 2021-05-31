import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import rootColor from '../../constants/rootColor';

const MySongsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'My Songs',
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Account')}
          activeOpacity={0.5}>
          <Avatar
            size={30}
            rounded
            title="L"
            titleStyle={{color: rootColor.containerColor}}
            containerStyle={{
              backgroundColor: rootColor.mainColor,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>this is my songs</Text>
    </View>
  );
};

export default MySongsScreen;
