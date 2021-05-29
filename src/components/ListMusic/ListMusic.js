import React from 'react';
import {View, Text} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import ItemMusic from '../ItemMusic/ItemMusic';
import styles from './styles';

const ListMusic = () => {
  return (
    <ScrollView style={styles.container}>
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
      <ItemMusic />
    </ScrollView>
  );
};

export default ListMusic;
