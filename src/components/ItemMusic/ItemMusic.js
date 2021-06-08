import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import rootColor from '../../constants/rootColor';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Tooltip, Text} from 'react-native-elements';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToMyFavorite} from '../../redux/actions/myFavoriteAction';
import {Alert} from 'react-native';

const ItemMusic = ({song, songs}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const listenSong = () => {
    navigation.navigate('Current Song Nav', {
      params: {
        songSelected: song,
        listSong: songs,
      },
      screen: 'Current Song',
    });
  };

  const handleAddToMyFavorite = async () => {
    const message = await dispatch(addToMyFavorite(user._id, song));
    if (!message.type) {
      Alert.alert('Lỗi', message);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={listenSong}>
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

        <Tooltip
          withPointer={false}
          containerStyle={{
            paddingVertical: 10,
            minHeight: 80,
            backgroundColor: rootColor.containerColor,
            borderWidth: 1,
            borderColor: rootColor.mainColor,
          }}
          popover={
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={handleAddToMyFavorite}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialIcons
                  name="favorite-border"
                  color={rootColor.mainColor}
                  size={25}
                />
                <Text style={{color: rootColor.smokeColor, marginLeft: 10}}>
                  Thích
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={listenSong}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialIcons
                  name="headset"
                  color={rootColor.mainColor}
                  size={25}
                />
                <Text style={{color: rootColor.smokeColor, marginLeft: 10}}>
                  Nghe nhạc
                </Text>
              </TouchableOpacity>
            </View>
          }
          overlayColor={false}>
          <ListItem.Chevron
            iconProps={{
              name: 'more-horiz',
              size: 30,
              color: rootColor.smokeColor,
            }}
          />
        </Tooltip>
      </ListItem>
    </TouchableOpacity>
  );
};

export default ItemMusic;
