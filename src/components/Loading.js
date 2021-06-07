import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import rootColor from '../constants/rootColor';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={rootColor.mainColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: rootColor.blackColor,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});

export default Loading;
