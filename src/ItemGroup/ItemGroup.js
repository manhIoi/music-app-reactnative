import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const ItemGroup = ({left, color, title}) => {
  return (
    <View style={[styles.container, left ? styles.left : styles.right]}>
      <View style={[styles.wrapper, color && {backgroundColor: color}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default ItemGroup;
