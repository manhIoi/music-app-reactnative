import React, {useEffect, useState} from 'react';
import {Text, View, Button, ImageBackground} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {useTrackPlayerProgress} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {useTrackPlayerEvents} from 'react-native-track-player/lib/hooks';
import {TrackPlayerEvents, STATE_PLAYING} from 'react-native-track-player';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import rootColor from '../../constants/rootColor';
import PlayerControl from '../../components/PlayerControl/PlayerControl';
import DetailSong from '../../components/DetailSong/DetailSong';
import convertTime from '../../utils/convertTime';

const CurrentSongScreen = ({navigation}) => {
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const {position, duration} = useTrackPlayerProgress(250);

  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
    if (event.state === STATE_PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });

  const slidingStarted = () => {
    setIsSeeking(true);
    console.log('sliding started');
  };

  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setIsSeeking(false);
    console.log('slide complete with value ', value);
  };

  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
      if (isInit) {
        onButtonPressed();
      }
    };

    startPlayer();
  }, []);

  useEffect(() => {
    console.log(position, duration);
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);
  useEffect(() => {
    navigation.setOptions({
      title: 'Nhạc hiện tại',
      titleAlign: 'center',
    });
  }, [navigation]);
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={{
        uri: 'https://leaderreaderjournal.com/wp-content/uploads/2021/01/dog.jpg',
      }}>
      <View style={styles.wrapper}>
        <DetailSong />
        <Slider
          style={{width: 400, height: 40}}
          minimumValue={0}
          maximumValue={1}
          value={sliderValue}
          thumbTintColor={rootColor.whiteColor}
          minimumTrackTintColor={rootColor.whiteColor}
          maximumTrackTintColor={rootColor.smokeColor}
          onSlidingStart={slidingStarted}
          onSlidingComplete={slidingCompleted}
        />
        <View>
          <Text style={{color: rootColor.whiteColor}}>
            {convertTime(position)}
          </Text>
          <Text style={{color: rootColor.whiteColor}}>
            {convertTime(duration)}
          </Text>
        </View>
        <PlayerControl
          isPlaying={isPlaying}
          onButtonPressed={onButtonPressed}
          isTrackPlayerInit={isTrackPlayerInit}
        />
      </View>
      <LinearGradient
        colors={['#00000047', '#000000']}
        style={styles.hightLight}></LinearGradient>
    </ImageBackground>
  );
};

const trackPlayerInit = async () => {
  await TrackPlayer.setupPlayer();
  console.log('Player is ready');
  await TrackPlayer.add({
    id: '1',
    url: 'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
    type: 'default',
    title: 'My Title',
    album: 'My Album',
    artist: 'Rohan Bhatia',
    artwork:
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  });
  console.log('Track is added');
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
    ],
  });
  return true;
};

export default CurrentSongScreen;
