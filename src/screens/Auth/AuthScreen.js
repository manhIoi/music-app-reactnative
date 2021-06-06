import React from 'react';
import {StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import rootColor from '../../constants/rootColor';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const AuthScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={rootColor.blackColor} />

      <View style={styles.container}>
        <View style={styles.listBtn}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.btnMainColor, styles.btn]}
            onPress={() => navigation.push('Register')}>
            <Text style={styles.textColor}>Đăng ký</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.btnOutline, styles.btn]}
            onPress={() => navigation.push('Login')}>
            <Text style={styles.textColor}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AuthScreen;
