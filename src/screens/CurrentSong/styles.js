import {StyleSheet} from 'react-native';
import dimensitions from '../../constants/dimensions';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  wrapper: {
    zIndex: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  hightLight: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    opacity: 1,
    zIndex: 0,
  },
  header: {
    paddingTop: dimensitions.statusBarHeight + 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 3,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
