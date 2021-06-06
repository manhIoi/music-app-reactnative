import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import MyInputText from '../../components/MyInputText/MyInputText';
import rootColor from '../../constants/rootColor';
import {loginAction} from '../../redux/actions/userActions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <View style={styles.inputContainer}>
        <MyInputText width="100%" value={email} setValue={setEmail} />
      </View>
      <Text style={[styles.text, {marginTop: 0}]}>Password</Text>
      <View style={styles.inputContainer}>
        <MyInputText
          value={password}
          setValue={setPassword}
          width="100%"
          isPassword
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => dispatch(loginAction(email, password))}>
          <Text style={styles.btnText}>Đăng nhập</Text>
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
    fontSize: 20,
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

export default LoginScreen;
