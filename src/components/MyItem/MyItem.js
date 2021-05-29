import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const MyItem = props => {
  const {index, rounded, largeText} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, !index && styles.firtItem]}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('List Music')}>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.image, rounded && styles.rounded]}
          resizeMode="cover"
          source={{
            uri: 'https://leaderreaderjournal.com/wp-content/uploads/2021/01/dog.jpg',
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.strongText}>Demo Demo Demo</Text>
        <Text style={styles.normalText}>Demo Demo Demo</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyItem;
