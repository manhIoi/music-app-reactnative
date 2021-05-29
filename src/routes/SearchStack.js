import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import globalStackOptions from '../constants/globalStackOptions';
import SearchScreen from '../screens/Search/SearchScreen';
import globalScreenOptions from '../constants/globalScreenOptions';

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default SearchStack;
