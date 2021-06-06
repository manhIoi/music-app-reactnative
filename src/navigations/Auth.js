import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AuthScreen from '../screens/Auth/AuthScreen';
import React from 'react';
import RegisterStack from '../routes/RegisterStack';
import LoginStack from '../routes/LoginStack';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Auth;
