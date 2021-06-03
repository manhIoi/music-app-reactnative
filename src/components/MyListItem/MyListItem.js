import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import rootApi from '../../api';
import MyItem from '../MyItem/MyItem';
import styles from './styles';

const MyListItem = props => {
  const {title, rounded, largeText, _id} = props;
  const [albums, setAlbums] = useState([]);

  const getAlbum = async idSuggestion => {
    const body = await rootApi.getAlbumBySuggestion(idSuggestion);
    setAlbums(body);
  };

  useEffect(() => {
    getAlbum(_id);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <ScrollView style={styles.listItemContainer} horizontal>
        {albums &&
          albums.map((album, index) => (
            <MyItem
              index={index}
              rounded={rounded}
              largeText={largeText}
              album={album}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default MyListItem;
