import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import rootColor from '../constants/rootColor';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Đăng nhập',
        headerTitleAlign: 'center',
        headerTintColor: rootColor.whiteColor,
        headerStyle: {backgroundColor: rootColor.blackColor},

        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LoginStack;
