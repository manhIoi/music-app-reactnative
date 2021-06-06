import React, {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import MyInputText from '../../components/MyInputText/MyInputText';
import rootColor from '../../constants/rootColor';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const RegisEmailScreen = () => {
  const navigation = useNavigation();

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
      <Text style={styles.text}>Email của bạn là gì ?</Text>
      <View style={styles.inputContainer}>
        <MyInputText width="100%" />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.push('Password')}>
          <Text style={styles.btnText}>Tiếp</Text>
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
