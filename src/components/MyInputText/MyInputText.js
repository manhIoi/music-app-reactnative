import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import rootColor from '../../constants/rootColor';

const MyInputText = ({width, isPassword, value, setValue}) => {
  return (
    <TextInput
      style={[styles.input, width && {width: width}]}
      secureTextEntry={isPassword}
      value={value}
      onChangeText={text => setValue(text)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: rootColor.grayColor,
    color: rootColor.whiteColor,
    borderRadius: 8,
  },
});

export default MyInputText;
