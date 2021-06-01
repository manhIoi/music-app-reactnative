import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import rootColor from '../../constants/rootColor';
import {Accessory} from 'react-native-elements';

const SettingAccountScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: 'Account Setting',
      headerTransparent: true,
      presentation: 'modal',
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 10}}>
          <Text style={styles.colorText}>Update</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => console.log('change avatar')}>
        <Avatar
          size={150}
          title="L"
          titleStyle={{
            color: rootColor.blackColor,
            fontSize: 50,
            fontWeight: 'bold',
          }}
          containerStyle={{
            backgroundColor: rootColor.mainColor,
          }}
          rounded>
          <Accessory
            name="settings"
            type="material-icons"
            size={40}
            style={{
              backgroundColor: rootColor.containerColor,
              color: rootColor.mainColor,
            }}
          />
        </Avatar>
      </TouchableOpacity>
      <TextInput defaultValue="Loi" style={styles.usernameInput} />
      <Text style={styles.noteText}>
        This is your name or nick name be display to app
      </Text>
    </View>
  );
};

export default SettingAccountScreen;
