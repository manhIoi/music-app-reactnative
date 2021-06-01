import React from 'react';
import {View, Text} from 'react-native';

const CurrentSong = () => {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        height: 50,
        top: 0,
        backgroundColor: 'red',
        zIndex: 100,
      }}>
      <Text> this is a tesst</Text>
    </View>
  );
};

export default CurrentSong;
