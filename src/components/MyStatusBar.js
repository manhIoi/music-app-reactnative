import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import rootColor from '../constants/rootColor';

const MyStatusBar = () => {
  return (
    <StatusBar
      backgroundColor={rootColor.containerColor}
      barStyle="light-content"
    />
  );
};

export default MyStatusBar;
