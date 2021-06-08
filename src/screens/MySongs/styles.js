import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: rootColor.blackColor,
  },
  strongText: {
    fontWeight: 'bold',
    color: rootColor.whiteColor,
  },
  normalText: {
    color: rootColor.smokeColor,
  },
});

export default styles;
