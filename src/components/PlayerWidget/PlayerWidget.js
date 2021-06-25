import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import rootColor from '../../constants/rootColor';
import {useDispatch, useSelector} from 'react-redux';
import {showModalListTrack} from '../../redux/actions/listTrackAction';
import {
  setPauseSong,
  setPlaySong,
} from '../../redux/actions/playerWidgetAction';
import TrackPlayer from 'react-native-track-player';

const PlayerWidget = () => {
  const playerWidget = useSelector(state => state.playerWidget);

  const dispatch = useDispatch();
  const {currentSong, detailSong, isPlayingSong} = playerWidget;

  const togglePlay = () => {
    if (isPlayingSong) {
      dispatch(setPauseSong());
      TrackPlayer.pause();
    } else {
      dispatch(setPlaySong());
      TrackPlayer.play();
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => dispatch(showModalListTrack())}
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
          <TouchableOpacity onPress={togglePlay}>
            <FontistoIcon
              style={styles.action}
              name={isPlayingSong ? 'pause' : 'play'}
              color={rootColor.smokeColor}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlayerWidget;
