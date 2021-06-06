import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import RegisEmailScreen from '../screens/Auth/RegisEmailScreen';
import RegisPassScreen from '../screens/Auth/RegisPassScreen';
import RegisDisplayNameScreen from '../screens/Auth/RegisDisplayNameScreen';
import rootColor from '../constants/rootColor';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const RegisterStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Tạo tài khoản',
        headerTitleAlign: 'center',
        headerTintColor: rootColor.whiteColor,
        headerStyle: {backgroundColor: rootColor.blackColor},

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Email" component={RegisEmailScreen} />
      <Stack.Screen name="Password" component={RegisPassScreen} />
      <Stack.Screen name="DisplayName" component={RegisDisplayNameScreen} />
    </Stack.Navigator>
  );
};

export default RegisterStack;
