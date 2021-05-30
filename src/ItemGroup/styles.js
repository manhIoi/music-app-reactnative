import {StyleSheet} from 'react-native';
import rootColor from '../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 100,
    marginBottom: 12,
  },
  right: {
    paddingLeft: 6,
  },
  left: {
    paddingRight: 6,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  title: {
    position: 'absolute',
    top: 8,
    left: 10,
    color: rootColor.whiteColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
