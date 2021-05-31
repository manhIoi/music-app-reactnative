import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    color: rootColor.whiteColor,
    fontSize: 16,
  },
});

export default styles;
