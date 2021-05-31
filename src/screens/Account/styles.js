import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    alignItems: 'center',
  },
  usernameText: {
    color: rootColor.whiteColor,
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default styles;
