import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: rootColor.blackColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listBtn: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    width: '70%',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  btnMainColor: {
    backgroundColor: rootColor.mainColor,
  },
  btnOutline: {
    backgroundColor: rootColor.blackColor,
    borderWidth: 1,
    borderColor: rootColor.grayColor,
  },
  textColor: {
    color: rootColor.whiteColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
