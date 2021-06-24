import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rootColor from '../../constants/rootColor';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const PlayerWidget = () => {
  const playerWidget = useSelector(state => state.playerWidget);
  const navigation = useNavigation();
  const {currentSong, detailSong} = playerWidget;

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: currentSong?.artwork,
        }}
      />
      <View
        style={[
          styles.slider,
          {
            right:
              (detailSong.position / detailSong.duration) * 100
                ? 100 - (detailSong.position / detailSong.duration) * 100 + '%'
                : 0,
          },
        ]}></View>
      <View style={styles.rightContainer}>
        <View style={styles.details}>
          <Text style={styles.strongText}>{currentSong?.title}</Text>
          <Text style={styles.normalText}>{currentSong?.artist}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action}>
            <MaterialIcon
              name="favorite-outline"
              color={rootColor.smokeColor}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcon
              style={styles.action}
              name="favorite-outline"
              color={rootColor.smokeColor}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlayerWidget;
