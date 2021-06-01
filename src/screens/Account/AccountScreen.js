import React, {useEffect} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import rootColor from '../../constants/rootColor';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-elements';
import MyButton from '../../components/MyButton.js/MyButton';

const sizeAvatar = 150;
const AccountScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    });
  }, [navigation]);

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <LinearGradient
        style={styles.container}
        colors={['#249b4e', rootColor.blackColor]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.3}}
        locations={[0, 1]}>
        <View
          style={[
            styles.avatarContainer,
            {transform: [{translateX: -75}, {translateY: -75}]},
          ]}>
          <Avatar
            size={sizeAvatar}
            title="L"
            titleStyle={{
              color: rootColor.blackColor,
              fontSize: 50,
              fontWeight: 'bold',
            }}
            containerStyle={{
              backgroundColor: rootColor.mainColor,
            }}
            rounded
          />
          <Text style={styles.usernameText}>Lợi</Text>
          <MyButton
            content="Chỉnh sửa"
            callback={() => navigation.navigate('SettingAccount')}
          />
        </View>
      </LinearGradient>
    </>
  );
};

export default AccountScreen;
