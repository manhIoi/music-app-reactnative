import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const childHeaderScreen = leftCallBack => ({
  headerTitleAlign: 'center',
  headerLeft: () => (
    <MaterialIcon
      name="arrow-back"
      color="white"
      size={20}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
      onPress={leftCallBack}
    />
  ),
});

export default childHeaderScreen;
