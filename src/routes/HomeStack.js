import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import globalScreenOptions from '../constants/globalScreenOptions';
import ListMusicScreen from '../screens/ListMusic/ListMusicScreen';
import {useNavigation} from '@react-navigation/native';
import childHeaderScreen from '../constants/childHeaderScreen';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

function HomeStack() {
  const navigation = useNavigation();
  const playerWidget = useSelector(state => state.playerWidget);
  return (
    <View style={{flex: 1, paddingBottom: !playerWidget.isShow ? 0 : 68}}>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="List Music"
          component={ListMusicScreen}
          options={childHeaderScreen(() => navigation.goBack())}
        />
      </Stack.Navigator>
    </View>
  );
}

export default HomeStack;
