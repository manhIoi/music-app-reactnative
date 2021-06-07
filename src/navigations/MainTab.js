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
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginAction} from '../redux/actions/userActions';

const Tab = createMaterialBottomTabNavigator();

const MainTab = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const checkOldUser = async () => {
    if (!user._id) {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const userObj = JSON.parse(userString);
        console.log(userObj);
        return await dispatch(loginAction(userObj.email, userObj.password));
      } else {
        navigation.navigate('Auth Nav');
      }
    } else {
      navigation.navigate('MainTab');
    }
  };

  useLayoutEffect(() => {
    // get old user
    checkOldUser();
  }, [user]);

  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: rootColor.containerColor,
        height: dimensitions.heightTabbar,
        justifyContent: 'center',
      }}
      shifting={false}
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
