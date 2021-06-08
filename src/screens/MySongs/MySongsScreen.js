import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import rootColor from '../../constants/rootColor';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMyFavorite} from '../../redux/actions/myFavoriteAction';
import styles from './styles';
import {ListItem, Avatar} from 'react-native-elements';
import {ScrollView} from 'react-native';

const MySongsScreen = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const myFavorite = useSelector(state => state.myFavorite);

  const callFetchMyFavorite = async () => {
    await dispatch(fetchMyFavorite(user._id));
  };

  const listenSong = song => {
    navigation.navigate('Current Song Nav', {
      params: {
        songSelected: song,
        listSong: myFavorite.listSong,
      },
      screen: 'Current Song',
    });
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
                />
              </ListItem>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default MySongsScreen;
