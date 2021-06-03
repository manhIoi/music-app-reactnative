import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';
const widthItem = 130;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginLeft: 20,
    width: widthItem,
  },
  firtItem: {
    marginLeft: 0,
  },
  strongText: {
    fontWeight: 'bold',
    color: rootColor.whiteColor,
    fontSize: 16,
    width: widthItem,
  },
  contentContainer: {
    flexDirection: 'column',
  },
  normalText: {
    color: rootColor.smokeColor,
    width: widthItem,
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
    width: widthItem,
    height: widthItem,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
