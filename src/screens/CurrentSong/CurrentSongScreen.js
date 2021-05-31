import React, {useEffect, useState} from 'react';
import {Text, View, Button, ImageBackground, StatusBar} from 'react-native';
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
import TimeDetail from '../../components/TimeDetail/TimeDetail';
import listTrack from '../../data';

const CurrentSongScreen = ({navigation}) => {
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const {position, duration} = useTrackPlayerProgress(250);
  const [trackInfo, setTrackInfo] = useState({});

  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  const onNextSong = async () => {
    await TrackPlayer.skipToNext();
  };

  const onPrevSong = async () => {
    await TrackPlayer.skipToPrevious();
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
  };

  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setIsSeeking(false);
  };

  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
      if (isInit) {
        let mounted = true;
        const trackId = await TrackPlayer.getCurrentTrack();
        if (!mounted || !trackId) return;
        const track = await TrackPlayer.getTrack(trackId);
        if (!mounted) return;
        setTrackInfo(track);
        console.log('info track ', track);
        const listener = TrackPlayer.addEventListener(
          'playback-track-changed',
          async data => {
            const track = await TrackPlayer.getTrack(data.nextTrack);
            if (!mounted) return;
            setTrackInfo(track);
          },
        );
        onButtonPressed();
        return () => {
          mounted = false;
          listener.remove();
        };
      }
    };
    startPlayer();
  }, []);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  useEffect(() => {
    navigation.setOptions({
      title: trackInfo?.title,
      titleAlign: 'center',
    });
  }, [navigation, trackInfo]);
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={{
          uri: trackInfo && trackInfo.artwork,
        }}>
        <View style={styles.wrapper}>
          <DetailSong title={trackInfo?.title} artist={trackInfo?.artist} />
          <Slider
            style={{width: '100%', height: 40}}
            minimumValue={0}
            maximumValue={1}
            value={sliderValue}
            thumbTintColor={rootColor.whiteColor}
            minimumTrackTintColor={rootColor.whiteColor}
            maximumTrackTintColor={rootColor.smokeColor}
            onSlidingStart={slidingStarted}
            onSlidingComplete={slidingCompleted}
          />
          <TimeDetail
            currentTime={convertTime(position)}
            durationTime={convertTime(duration)}
          />
          <PlayerControl
            isPlaying={isPlaying}
            onButtonPressed={onButtonPressed}
            onNextSong={onNextSong}
            onPrevSong={onPrevSong}
            isTrackPlayerInit={isTrackPlayerInit}
          />
        </View>
        <LinearGradient
          colors={['#00000047', '#000000']}
          style={styles.hightLight}></LinearGradient>
      </ImageBackground>
    </>
  );
};

const trackPlayerInit = async () => {
  await TrackPlayer.setupPlayer();
  console.log('Player is ready');
  await TrackPlayer.add(listTrack);
  console.log('Track is added');
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
    ],
  });
  return true;
};

export default CurrentSongScreen;
