import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const MyItem = props => {
  const {index, rounded, largeText, album} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, !index && styles.firtItem]}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('List Music', {idAlbum: album._id})}>
      <View style={styles.imageContainer}>
        <Image
          style={[
            styles.image,
            rounded && styles.rounded,
            largeText && styles.largeText,
          ]}
          resizeMode="cover"
          source={{
            uri: album.image,
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        {album.name && (
          <Text numberOfLines={1} style={styles.strongText}>
            {album.name}
          </Text>
        )}
        <Text numberOfLines={2} style={styles.normalText}>
          {album.typeAlbum && album.typeAlbum}
          {album.typeAlbum && album.artist && ' - '}
          {album.artist && album.artist}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyItem;
