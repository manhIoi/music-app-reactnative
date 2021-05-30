import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import rootColor from '../../constants/rootColor';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const ItemMusic = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate('Current Song Nav')}>
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: rootColor.blackColor,
          borderColor: rootColor.blackColor,
        }}>
        <Avatar
          size={45}
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
            color: rootColor.smokeColor,
          }}
        />
      </ListItem>
    </TouchableOpacity>
  );
};

export default ItemMusic;
