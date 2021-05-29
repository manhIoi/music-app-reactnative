import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../routes/HomeStack';
import globalStackOptions from '../constants/globalStackOptions';
import SearchStack from '../routes/SearchStack';
import MySongsStack from '../routes/MySongsStack';
import AccountStack from '../routes/AccountStack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rootColor from '../constants/rootColor';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={globalStackOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="home"
              size={20}
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
              size={20}
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
              size={20}
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
              size={20}
              color={focused ? rootColor.whiteColor : rootColor.smokeColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
