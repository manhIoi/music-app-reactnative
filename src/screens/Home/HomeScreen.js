import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import rootApi from '../../api';
import MyListItem from '../../components/MyListItem/MyListItem';
import stylesHomeScreen from './styles';

const HomeScreen = () => {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestion = async () => {
    const body = await rootApi.getAllSuggestion();
    setSuggestions(body);
  };

  useEffect(() => {
    getSuggestion();
  }, []);

  return (
    <ScrollView style={stylesHomeScreen.container}>
      {suggestions &&
        suggestions.map(suggestion => (
          <MyListItem
            key={suggestion._id}
            title={suggestion.title}
            _id={suggestion._id}
          />
        ))}
      {/* <MyListItem title="Bảng xếp hạng" />
      <MyListItem title="Nghệ sĩ nổi bật" rounded largeText />
      <MyListItem title="Nhạc mới" />
      <MyListItem title="Âu mỹ" rounded largeText /> */}
    </ScrollView>
  );
};

export default HomeScreen;
