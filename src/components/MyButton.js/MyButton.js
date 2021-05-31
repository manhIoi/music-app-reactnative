import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const MyButton = ({content, callback}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={callback}
      activeOpacity={0.5}>
      <Text style={styles.btnText}>{content}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
