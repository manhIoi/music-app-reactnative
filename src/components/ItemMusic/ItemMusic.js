import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import rootColor from '../../constants/rootColor';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const ItemMusic = ({song, songs}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate('Current Song Nav', {
          params: {
            songSelected: song,
            listSong: songs,
          },
          screen: 'Current Song',
        })
      }>
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: rootColor.blackColor,
          borderColor: rootColor.blackColor,
        }}>
        <Avatar
          size={45}
          source={{
            uri: song?.artwork,
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.strongText}>
            {song?.title}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.normalText}>
            {song?.artist || 'Unknow'}
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
