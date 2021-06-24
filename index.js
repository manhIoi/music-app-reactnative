/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {RootSiblingParent} from 'react-native-root-siblings';

const AppConfig = () => {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <App />
      </RootSiblingParent>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppConfig);
TrackPlayer.registerPlaybackService(() => require('./service'));
