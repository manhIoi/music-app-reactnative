import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import ItemMusic from '../../components/ItemMusic/ItemMusic';
import ListMusic from '../../components/ListMusic/ListMusic';
import styles from './styles';
import {useRoute, useNavigation} from '@react-navigation/native';
import rootApi from '../../api';
import {StatusBar} from 'react-native';

const ListMusicScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [songs, setSongs] = useState([]);
  const {idAlbum, name} = route.params;

  const getSongs = async idAlbum => {
    const body = await rootApi.getSongByAlbum(idAlbum);
    setSongs(body);
  };

  useEffect(() => {
    getSongs(idAlbum);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation]);

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View style={styles.container}>
        <ListMusic songs={songs} />
      </View>
    </>
  );
};

export default ListMusicScreen;
