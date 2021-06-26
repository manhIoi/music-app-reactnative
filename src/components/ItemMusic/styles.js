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
    color: rootColor.smokeColor,
  },
  itemBottomSheet: {
    backgroundColor: rootColor.blackColor,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textBottomSheet: {
    color: rootColor.whiteColor,
    fontWeight: 'bold',
    marginRight: 20,
  },
});

export default styles;
