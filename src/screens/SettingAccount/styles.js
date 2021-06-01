import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: rootColor.blackColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameInput: {
    color: rootColor.whiteColor,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: rootColor.mainColor,
    width: '50%',
  },
  noteText: {
    color: rootColor.smokeColor,
    fontSize: 12,
    marginTop: 20,
  },
  colorText: {
    color: rootColor.whiteColor,
  },
});

export default styles;
