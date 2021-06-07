import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import rootColor from '../../constants/rootColor';
import {useSelector} from 'react-redux';

const MySongsScreen = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);

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
            title={user && user.displayName[0]}
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
