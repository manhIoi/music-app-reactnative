import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import ItemMusic from '../../components/ItemMusic/ItemMusic';
import ListMusic from '../../components/ListMusic/ListMusic';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import rootApi from '../../api';

const ListMusicScreen = () => {
  const route = useRoute();
  const [songs, setSongs] = useState([]);
  const {idAlbum} = route.params;

  const getSongs = async idAlbum => {
    const body = await rootApi.getSongByAlbum(idAlbum);
    setSongs(body);
  };

  useEffect(() => {
    getSongs(idAlbum);
  }, []);

  return (
    <View style={styles.container}>
      <ListMusic songs={songs} />
    </View>
  );
};

export default ListMusicScreen;
