import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: rootColor.blackColor,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  titleGroup: {
    color: rootColor.whiteColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
  titleContainer: {
    marginBottom: 20,
  },
  listItemContainer: {},
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
