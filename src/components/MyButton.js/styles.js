import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 1,
    borderColor: rootColor.smokeColor,
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: rootColor.whiteColor,
  },
});

export default styles;
