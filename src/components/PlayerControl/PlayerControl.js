import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rootColor from '../../constants/rootColor';
import styles from './styles';

const PlayerControl = props => {
  const {isTrackPlayerInit, isPlaying, onButtonPressed} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcon
          name="skip-previous"
          size={30}
          color={rootColor.whiteColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onButtonPressed}
        disabled={!isTrackPlayerInit}>
        <MaterialIcon
          name={`${isPlaying ? 'pause' : 'play-arrow'}`}
          size={50}
          color={rootColor.blackColor}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialIcon name="skip-next" size={30} color={rootColor.whiteColor} />
      </TouchableOpacity>
    </View>
  );
};

export default PlayerControl;
