import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import globalStackOptions from '../constants/globalStackOptions';
import AccountScreen from '../screens/Account/AccountScreen';
import globalScreenOptions from '../constants/globalScreenOptions';
import SettingAccountScreen from '../screens/SettingAccount/SettingAccountScreen';
import childHeaderScreen from '../constants/childHeaderScreen';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

function AccountStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen
        name="SettingAccount"
        component={SettingAccountScreen}
        options={[childHeaderScreen(() => navigation.goBack())]}
      />
    </Stack.Navigator>
  );
}

export default AccountStack;
