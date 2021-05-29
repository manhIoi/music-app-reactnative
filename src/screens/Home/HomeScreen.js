import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MyListItem from '../../components/MyListItem/MyListItem';
import stylesHomeScreen from './styles';

const HomeScreen = () => {
  return (
    <ScrollView style={stylesHomeScreen.container}>
      <MyListItem title="Bảng xếp hạng" />
      <MyListItem title="Nghệ sĩ nổi bật" rounded largeText />
      <MyListItem title="Nhạc mới" />
      <MyListItem title="Âu mỹ" rounded largeText />
    </ScrollView>
  );
};

export default HomeScreen;
