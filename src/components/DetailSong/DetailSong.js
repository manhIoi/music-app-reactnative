import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextTicker from 'react-native-text-ticker';

const DetailSong = () => {
  return (
    <View style={styles.container}>
      <TextTicker
        style={styles.strongText}
        duration={3000}
        loop
        bounce={false}
        shouldAnimateTreshold={40}
        repeatSpacer={200}
        marqueeDelay={1000}>
        Entention - Justin Bieber
      </TextTicker>
      <Text style={styles.normalText}>Justin BieBer</Text>
    </View>
  );
};

export default DetailSong;
