import React from 'react';
import {View, Text} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import ItemMusic from '../../components/ItemMusic/ItemMusic';
import ListMusic from '../../components/ListMusic/ListMusic';
import styles from './styles';

const ListMusicScreen = () => {
  return (
    <View style={styles.container}>
      <ListMusic />
    </View>
  );
};

export default ListMusicScreen;
