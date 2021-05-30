import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: rootColor.whiteColor,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 50,
  },
});

export default styles;
