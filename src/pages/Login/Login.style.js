import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    marginBottom: 25,
  },
  info: {
    alignItems: 'center',
  },
  body_container: {},
});
