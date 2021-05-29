import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import globalStackOptions from '../constants/globalStackOptions';
import AccountScreen from '../screens/Account/AccountScreen';
import globalScreenOptions from '../constants/globalScreenOptions';

const Stack = createStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  );
}

export default AccountStack;
