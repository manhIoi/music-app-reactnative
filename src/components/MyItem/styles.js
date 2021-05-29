import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginLeft: 20,
  },
  firtItem: {
    marginLeft: 0,
  },
  strongText: {
    fontWeight: 'bold',
    color: rootColor.whiteColor,
    fontSize: 16,
  },
  contentContainer: {
    flexDirection: 'column',
  },
  normalText: {
    color: rootColor.smokeColor,
  },
  largeText: {
    fontSize: 18,
  },
  rounded: {
    borderRadius: 65,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 130,
    height: 130,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
