import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  strongText: {
    color: rootColor.whiteColor,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    fontSize: 20,
  },
  normalText: {
    color: rootColor.smokeColor,
    fontSize: 18,
  },
});

export default styles;
