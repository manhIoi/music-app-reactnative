import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import rootApi from '../../api';
import Loading from '../../components/Loading';
import MyListItem from '../../components/MyListItem/MyListItem';
import {loadDone} from '../../redux/actions/loadingAction';
import stylesHomeScreen from './styles';

const HomeScreen = () => {
  const [suggestions, setSuggestions] = useState([]);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const getSuggestion = async () => {
    const body = await rootApi.getAllSuggestion();
    setSuggestions(body);
  };

  useEffect(() => {
    getSuggestion();
    setTimeout(() => {
      if (!loading) dispatch(loadDone());
    }, 2000);
  }, []);

  return (
    <View style={{position: 'relative', flex: 1}}>
      {!loading && <Loading />}

      <ScrollView style={stylesHomeScreen.container}>
        {suggestions &&
          suggestions.map(suggestion => (
            <MyListItem
              key={suggestion._id}
              title={suggestion.title}
              _id={suggestion._id}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
