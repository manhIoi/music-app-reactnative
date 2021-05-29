import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleText: {
    color: rootColor.whiteColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleContainer: {
    marginBottom: 10,
  },
  listItemContainer: {
    flexDirection: 'row',
  },
});

export default styles;
