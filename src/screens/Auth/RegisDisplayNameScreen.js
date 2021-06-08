import React, {useLayoutEffect, useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import MyInputText from '../../components/MyInputText/MyInputText';
import rootColor from '../../constants/rootColor';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useRoute} from '@react-navigation/native';
import rootApi from '../../api';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../redux/actions/userActions';

const RegisEmailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {email, password} = route.params;
  const [displayName, setDisplayName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const res = await rootApi.register({
      email,
      password,
      displayName,
    });

    if (!res.body) {
      Alert.alert('Lỗi', res);
    } else {
      const isCreateMyFavorite = await rootApi.createMyFavorite(res.body._id);
      console.log(isCreateMyFavorite);
      dispatch(loginAction(res.body.email, password));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.goBack()}>
          <MaterialIcon
            name="arrow-back"
            color={rootColor.whiteColor}
            size={24}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tên của bạn</Text>
      <View style={styles.inputContainer}>
        <MyInputText
          width="100%"
          value={displayName}
          setValue={setDisplayName}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity style={styles.btnNext} onPress={handleSubmit}>
          <Text style={styles.btnText}>Hoàn tất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: rootColor.blackColor,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: rootColor.whiteColor,
    marginTop: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  btnNext: {
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: rootColor.grayColor,
  },
  btnText: {
    color: rootColor.whiteColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RegisEmailScreen;
