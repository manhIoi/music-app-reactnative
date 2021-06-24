import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: rootColor.containerColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: rootColor.blackColor,
    borderTopColor: rootColor.grayColor,
    position: 'relative',
  },
  slider: {
    position: 'absolute',
    top: -1,
    left: 0,
    height: 1,
    backgroundColor: rootColor.mainColor,
  },
  image: {
    width: 70,
    height: 70,
  },
  rightContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  details: {},
  strongText: {
    fontWeight: 'bold',
    color: rootColor.whiteColor,
  },
  normalText: {
    color: rootColor.whiteColor,
  },
  actions: {
    flexDirection: 'row',
  },
  action: {
    marginRight: 10,
  },
});

export default styles;
