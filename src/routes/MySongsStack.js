import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import globalStackOptions from '../constants/globalStackOptions';
import MySongsScreen from '../screens/MySongs/MySongsScreen';
import globalScreenOptions from '../constants/globalScreenOptions';

const Stack = createStackNavigator();

function MySongsStack() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="MySongsScreen" component={MySongsScreen} />
    </Stack.Navigator>
  );
}

export default MySongsStack;
