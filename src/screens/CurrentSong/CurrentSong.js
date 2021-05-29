import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {useTrackPlayerProgress} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {useTrackPlayerEvents} from 'react-native-track-player/lib/hooks';
import {TrackPlayerEvents, STATE_PLAYING} from 'react-native-track-player';

const CurrentSong = () => {
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
    };
    setTimeout(() => {
      console.log(duration, position);
    }, 1000);

    startPlayer();
  }, []);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      console.log('position, duration', position, duration);
      setSliderValue(position / duration);
    }
  }, [position, duration]);
  return (
    <View>
      <Button
        title={isPlaying ? 'Pause' : 'Play'}
        onPress={onButtonPressed}
        disabled={!isTrackPlayerInit}
      />
      <Slider
        style={{width: 400, height: 40}}
        minimumValue={0}
        maximumValue={1}
        value={sliderValue}
        minimumTrackTintColor="red"
        maximumTrackTintColor="orange"
        onSlidingStart={slidingStarted}
        onSlidingComplete={slidingCompleted}
      />
    </View>
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

export default CurrentSong;
