import React from 'react';
import {View, Text} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import rootColor from '../../constants/rootColor';
import styles from './styles';

const ItemMusic = () => {
  return (
    <ListItem
      bottomDivider
      containerStyle={{
        backgroundColor: rootColor.blackColor,
        borderColor: rootColor.blackColor,
      }}>
      <ListItem.Title style={styles.strongText}>1</ListItem.Title>
      <Avatar
        source={{
          uri: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.strongText}>
          Thuận theo ý trời
        </ListItem.Title>
        <ListItem.Subtitle style={styles.normalText}>
          1000.100
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron
        iconProps={{
          name: 'more-horiz',
          size: 20,
          color: 'black',
        }}
      />
    </ListItem>
  );
};

export default ItemMusic;
