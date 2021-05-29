import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    backgroundColor: rootColor.blackColor,
  },
  strongText: {
    fontWeight: 'bold',
    color: rootColor.whiteColor,
  },
  normalText: {
    color: rootColor.whiteColor,
  },
});

export default styles;
