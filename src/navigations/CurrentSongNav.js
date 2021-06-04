import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CurrentSongScreen from '../screens/CurrentSong/CurrentSongScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rootColor from '../constants/rootColor';
import {useNavigation} from '@react-navigation/native';
import globalScreenOptions from '../constants/globalScreenOptions';

const Stack = createStackNavigator();

const CurrentSongNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="Current Song"
        component={CurrentSongScreen}
        options={{
          presentation: 'modal',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerRight: () => (
            <MaterialIcon
              name="more-vert"
              color={rootColor.whiteColor}
              size={30}
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeft: () => (
            <MaterialIcon
              style={{marginLeft: 4}}
              name="expand-more"
              color={rootColor.whiteColor}
              size={30}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CurrentSongNav;
