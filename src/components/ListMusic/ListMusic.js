import React, {useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import ItemMusic from '../ItemMusic/ItemMusic';
import styles from './styles';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import rootColor from '../../constants/rootColor';
import dimensions from '../../constants/dimensions';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Loading from '../Loading';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListMusic = ({songs}) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      presentation: 'modal',
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {!songs[0]?.artwork && <Loading />}
      <ImageHeaderScrollView
        style={{position: 'relative'}}
        maxHeight={400}
        minHeight={150}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        fadeOutForeground
        headerImage={{
          uri: songs[0]?.artwork,
        }}
        renderForeground={() => (
          <>
            <LinearGradient
              colors={['#0000', '#000000']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                top: -40,
                zIndex: 0,
              }}></LinearGradient>
            <TouchableOpacity
              onPress={() =>
                // navigation.navigate('Current Song Nav', {
                //   params: {
                //     listSong: songs,
                //   },
                //   screen: 'Current Song',
                // })
                console.log('Run music')
              }
              activeOpacity={0.9}
              style={{
                position: 'absolute',
                bottom: 0,
                zIndex: 1100,
                backgroundColor: rootColor.mainColor,
                padding: 20,
                borderRadius: 50,
                transform: [
                  {
                    translateX: windowWidth / 2 - 30,
                  },
                  {translateY: -10},
                ],
              }}>
              <MaterialIcon
                name="play-arrow"
                size={25}
                color={rootColor.blackColor}
              />
            </TouchableOpacity>
          </>
        )}>
        <View
          style={{
            height: windowHeight - 150 - dimensions.heightTabbar,
            backgroundColor: rootColor.blackColor,
          }}>
          {songs && songs.map(song => <ItemMusic song={song} songs={songs} />)}
        </View>
      </ImageHeaderScrollView>
    </View>
  );
};

export default ListMusic;
