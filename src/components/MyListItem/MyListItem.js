import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MyItem from '../MyItem/MyItem';
import styles from './styles';

const MyListItem = props => {
  const {title, rounded, largeText} = props;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <ScrollView style={styles.listItemContainer} horizontal>
        <MyItem rounded={rounded} largeText={largeText} index={0} />
        <MyItem rounded={rounded} largeText={largeText} index={1} />
        <MyItem rounded={rounded} largeText={largeText} index={2} />
      </ScrollView>
    </View>
  );
};

export default MyListItem;
