import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
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
import {useDispatch, useSelector} from 'react-redux';
import {
  setCurrentSong,
  setDetailsSong,
} from '../../redux/actions/playerWidgetAction';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {hideModalListTrack} from '../../redux/actions/listTrackAction';

const CurrentSongModal = () => {
  const {listSong, songSelected} = useSelector(state => state.listTrack);
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const {position, duration} = useTrackPlayerProgress(250);
  const [trackInfo, setTrackInfo] = useState({});
  const dispatch = useDispatch();

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
    try {
      await TrackPlayer.skipToNext();
    } catch (error) {
      console.log(error.message);
      await TrackPlayer.skip(listSong[0]._id);
    }
  };

  const onPrevSong = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (error) {
      console.log(error.message);
      await TrackPlayer.skip(listSong[listSong.length - 1]._id);
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
  };

  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setIsSeeking(false);
  };

  const closeModal = () => {
    dispatch(hideModalListTrack());
  };

  useEffect(() => {
    if (listSong.length > 0) {
      console.log(listSong, songSelected);

      const startPlayer = async () => {
        const tmp = await listSong.map(song => {
          return {
            id: song._id,
            url: song.url,
            type: song.type,
            album: 'My Album',
            artist: song.artist,
            artwork: song.artwork,
            title: song.title,
          };
        });
        let isInit = await trackPlayerInit(tmp);
        setIsTrackPlayerInit(isInit);
        if (isInit) {
          if (!songSelected) {
            const trackId = await TrackPlayer.getCurrentTrack();
            if (!trackId) return;
            const track = await TrackPlayer.getTrack(trackId);
            setTrackInfo(track);
          } else {
            const track = await TrackPlayer.getTrack(songSelected._id);
            await TrackPlayer.skip(songSelected._id);
            setTrackInfo(track);
          }

          const listener = TrackPlayer.addEventListener(
            'playback-track-changed',
            async data => {
              console.log(data);
              if (!data.nextTrack) {
                await onNextSong();
                const trackIndex = await TrackPlayer.getCurrentTrack();
                const trackObj = await TrackPlayer.getTrack(trackIndex);
                setTrackInfo(trackObj);
                // dispatch(setCurrentSong(trackObj));
              } else {
                const track = await TrackPlayer.getTrack(data.nextTrack);
                setTrackInfo(track);
                // dispatch(setCurrentSong(track));
              }
            },
          );

          onButtonPressed();
          return () => {
            listener.remove();
          };
        }
      };
      startPlayer();
    }
  }, [songSelected, listSong]);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
      dispatch(setDetailsSong({position, duration}));
    }
  }, [position, duration]);

  useEffect(() => {
    if (trackInfo.id) {
      console.log(trackInfo);
      dispatch(setCurrentSong(trackInfo));
    }
  }, [trackInfo]);

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
        <View style={styles.header}>
          <TouchableOpacity onPress={closeModal}>
            <AntDesignIcon name="down" size={20} color={rootColor.whiteColor} />
          </TouchableOpacity>
          <Text style={styles.title}>{trackInfo?.title}</Text>
          <View style={{width: 20, height: 20}}></View>
        </View>
        <View style={styles.wrapper}>
          <DetailSong title={trackInfo?.title} artist={trackInfo?.artist} />
          <Slider
            style={{width: '100%', height: 40}}
            minimumValue={0}
            maximumValue={1}
            value={sliderValue}
            thumbTintColor={rootColor.whiteColor}
            minimumTrackTintColor={rootColor.mainColor}
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

const trackPlayerInit = async listTrack => {
  if (listTrack.length > 0) {
    await TrackPlayer.setupPlayer();
    console.log('Player is ready');
    await TrackPlayer.add(listTrack);
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
  }
};

export default CurrentSongModal;
