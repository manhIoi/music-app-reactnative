import React, {useLayoutEffect} from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStack from '../routes/HomeStack';
import globalStackOptions from '../constants/globalStackOptions';
import SearchStack from '../routes/SearchStack';
import MySongsStack from '../routes/MySongsStack';
import AccountStack from '../routes/AccountStack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rootColor from '../constants/rootColor';
import dimensitions from '../constants/dimensions';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Tab = createMaterialBottomTabNavigator();

const MainTab = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);

  useLayoutEffect(() => {
    if (!user._id) {
      navigation.navigate('Auth Nav');
    }
  }, []);

  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: rootColor.containerColor,
        height: dimensitions.heightTabbar,
        justifyContent: 'center',
      }}
      screenOptions={globalStackOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="home"
              size={25}
              color={focused ? rootColor.whiteColor : rootColor.smokeColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="search"
              size={25}
              color={focused ? rootColor.whiteColor : rootColor.smokeColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Songs"
        component={MySongsStack}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="view-array"
              size={25}
              color={focused ? rootColor.whiteColor : rootColor.smokeColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="account-circle"
              size={25}
              color={focused ? rootColor.whiteColor : rootColor.smokeColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
