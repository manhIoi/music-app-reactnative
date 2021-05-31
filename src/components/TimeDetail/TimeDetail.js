import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const TimeDetail = ({currentTime, durationTime}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentTime}</Text>
      <Text style={styles.text}>{durationTime}</Text>
    </View>
  );
};

export default TimeDetail;
