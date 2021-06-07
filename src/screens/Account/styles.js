import {StyleSheet} from 'react-native';
import rootColor from '../../constants/rootColor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
  btnLogout: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: rootColor.mainColor,
    borderRadius: 50,
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: [
      {
        translateX: -45 / 2,
      },
    ],
  },
});

export default styles;
