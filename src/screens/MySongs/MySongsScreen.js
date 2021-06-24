import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import rootColor from '../../constants/rootColor';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchMyFavorite,
  removeFromMyFavorite,
} from '../../redux/actions/myFavoriteAction';
import styles from './styles';
import {ListItem, Avatar} from 'react-native-elements';
import MyToast from '../../components/MyToast';
import Toast from 'react-native-root-toast';
import dimensitions from '../../constants/dimensions';
import {setListTrack} from '../../redux/actions/listTrackAction';

const MySongsScreen = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const myFavorite = useSelector(state => state.myFavorite);
  const [showMessage, setShowMessage] = useState({
    value: false,
    message: '',
  });

  const callFetchMyFavorite = async () => {
    await dispatch(fetchMyFavorite(user._id));
  };

  const listenSong = song => {
    // navigation.navigate('Current Song Nav', {
    //   params: {
    //     songSelected: song,
    //     listSong: myFavorite.listSong,
    //   },
    //   screen: 'Current Song',
    // });

    dispatch(
      setListTrack({
        songSelected: song,
        listSong: myFavorite.listSong,
      }),
    );
  };

  const handleRemoveSong = async idSong => {
    const body = await dispatch(removeFromMyFavorite(user._id, idSong));
    console.log(body);
    if (body.type) {
      setShowMessage({
        value: true,
        message: 'Bài hát đã được xóa khỏi danh sách',
      });
    } else {
      setShowMessage({
        value: true,
        message: 'Đã có lỗi xảy ra, vui lòng thử lại !',
      });
    }
  };

  useEffect(() => {
    callFetchMyFavorite();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: 'My Songs',
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Account')}
          activeOpacity={0.5}>
          <Avatar
            size={30}
            rounded
            title={user && user.displayName[0]}
            titleStyle={{color: rootColor.containerColor}}
            containerStyle={{
              backgroundColor: rootColor.mainColor,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (showMessage.value) {
      setTimeout(() => {
        setShowMessage({
          value: false,
          message: '',
        });
      }, 1000);
    }
  }, [showMessage]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {myFavorite.listSong &&
          myFavorite.listSong.map(song => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => listenSong(song)}>
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

                <ListItem.Chevron
                  iconProps={{
                    name: 'favorite',
                    size: 25,
                    color: rootColor.mainColor,
                  }}
                  onPress={() => handleRemoveSong(song._id)}
                />
              </ListItem>
            </TouchableOpacity>
          ))}
      </ScrollView>
      <Toast
        visible={showMessage.value}
        position={-dimensitions.heightTabbar - 10}
        backgroundColor={rootColor.whiteColor}
        textColor={rootColor.blackColor}
        opacity={1}
        hideOnPress={true}>
        {showMessage.message}
      </Toast>
    </View>
  );
};

export default MySongsScreen;
