import React, {useEffect, useLayoutEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './src/navigations/MainTab';
import {LogBox, View} from 'react-native';
import MyStatusBar from './src/components/MyStatusBar';
import CurrentSongNav from './src/navigations/CurrentSongNav';
import Auth from './src/navigations/Auth';

const Stack = createStackNavigator();

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <>
      <MyStatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Current Song Nav"
            component={CurrentSongNav}
            options={{
              presentation: 'modal',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Auth Nav"
            component={Auth}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
