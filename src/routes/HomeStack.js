import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import globalScreenOptions from '../constants/globalScreenOptions';
import ListMusicScreen from '../screens/ListMusic/ListMusicScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import childHeaderScreen from '../constants/childHeaderScreen';

const Stack = createStackNavigator();

function HomeStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="List Music"
        component={ListMusicScreen}
        options={childHeaderScreen(() => navigation.goBack())}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
