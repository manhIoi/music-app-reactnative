import React from 'react';
import {View, Text} from 'react-native';
import ListGroup from '../../components/ListGroup/ListGroup';
import styles from './styles';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <ListGroup />
    </View>
  );
};

export default SearchScreen;
