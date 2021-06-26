import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Image, StatusBar} from 'react-native';
import {ListItem, Avatar, Text, BottomSheet} from 'react-native-elements';
import rootColor from '../../constants/rootColor';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {addToMyFavorite} from '../../redux/actions/myFavoriteAction';
import MyToast from '../MyToast';
import {
  setListTrack,
  showModalListTrack,
} from '../../redux/actions/listTrackAction';

const ItemMusic = ({song, songs}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const user = useSelector(state => state.user);
  const listTrack = useSelector(state => state.listTrack);

  const list = [
    {
      title: 'Thích',
      nameIcon: 'favorite-border',
      onPress: () => {
        setIsVisible(false);
        handleAddToMyFavorite();
      },
    },
    {
      title: 'Nghe nhạc',
      nameIcon: 'music-note',

      onPress: () => {
        setIsVisible(false);
        listenSong();
      },
    },
    {
      title: 'Hủy bỏ',
      nameIcon: 'close',
      containerStyle: {backgroundColor: rootColor.mainColor},
      titleStyle: {color: rootColor.grayColor},
      colorIcon: '#dc3545',
      onPress: () => setIsVisible(false),
    },
  ];

  const listenSong = async () => {
    if (listTrack.songSelected._id !== song._id) {
      dispatch(
        setListTrack({
          songSelected: song,
          listSong: songs,
        }),
      );
    }

    dispatch(showModalListTrack());
  };

  const handleAddToMyFavorite = async () => {
    const message = await dispatch(addToMyFavorite(user._id, song));
    if (!message.type) {
      setMessage(message);
    } else {
      setMessage('Bài hát đã được thêm');
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={listenSong}>
      {isVisible && <StatusBar backgroundColor={rootColor.blackColor} />}
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: rootColor.blackColor,
          borderColor: rootColor.blackColor,
        }}>
        <Avatar
          size={45}
          source={{
            uri: song?.artwork,
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.strongText}>
            {song?.title}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.normalText}>
            {song?.artist || 'Unknow'}
          </ListItem.Subtitle>
        </ListItem.Content>

        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <ListItem.Chevron
            iconProps={{
              name: 'more-horiz',
              size: 30,
              color: rootColor.smokeColor,
            }}
          />
        </TouchableOpacity>
        <BottomSheet
          isVisible={isVisible}
          containerStyle={{
            backgroundColor: rootColor.blackColor,
            opacity: 0.95,
          }}>
          <View style={{alignItems: 'center', marginBottom: 30}}>
            <Image
              source={{uri: song.artwork}}
              style={{
                width: 150,
                height: 150,
                marginBottom: 10,
              }}
            />
            <Text style={{color: rootColor.whiteColor}}>{song.title}</Text>
            <Text style={{color: rootColor.whiteColor}}>{song.artist}</Text>
          </View>

          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={[styles.itemBottomSheet, l.containerStyle]}
              onPress={l.onPress}>
              <ListItem.Content style={styles.titleContainer}>
                <ListItem.Title style={styles.textBottomSheet}>
                  <MaterialIcons
                    name={l.nameIcon}
                    size={20}
                    color={l.colorIcon ? l.colorIcon : rootColor.smokeColor}
                  />
                </ListItem.Title>
                <ListItem.Title style={[styles.textBottomSheet, l.titleStyle]}>
                  {l.title}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
      </ListItem>
      <MyToast content={message} setContent={setMessage} />
    </TouchableOpacity>
  );
};

export default ItemMusic;
