import React from 'react';
import {View, Text, LogBox, Animated} from 'react-native';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './src/navigations/MainTab';

import MyStatusBar from './src/components/MyStatusBar';
// import CurrentSongNav from './src/navigations/CurrentSongNav';
import Auth from './src/navigations/Auth';
import CurrentSongModal from './src/screens/CurrentSong/CurrentSongModal';
import dimensitions from './src/constants/dimensions';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';

const Stack = createStackNavigator();

const App = () => {
  const listTrack = useSelector(state => state.listTrack);
  const oy = useRef(
    new Animated.Value(
      dimensitions.heightScreen + dimensitions.statusBarHeight,
    ),
  ).current;
  LogBox.ignoreAllLogs();

  const show = () => {
    Animated.timing(oy, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const hide = () => {
    Animated.timing(oy, {
      toValue: dimensitions.heightScreen + dimensitions.statusBarHeight,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (listTrack.isShowModal) {
      show();
    } else {
      hide();
    }
  }, [listTrack.isShowModal]);

  return (
    <View style={{flex: 1}}>
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
          {/* <Stack.Screen
            name="Current Song Nav"
            component={CurrentSongNav}
            options={{
              presentation: 'modal',
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="Auth Nav"
            component={Auth}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          transform: [
            {
              translateY: oy,
            },
          ],
        }}>
        <CurrentSongModal />
      </Animated.View>
    </View>
  );
};

export default App;
