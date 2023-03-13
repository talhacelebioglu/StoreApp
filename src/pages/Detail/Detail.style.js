import {StyleSheet, Dimensions} from 'react-native';

const deviceWindow = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    padding: 15,
    marginVertical: 10,
  },
  image: {
    width: deviceWindow.width,
    height: deviceWindow.height / 2,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontSize: 18,
    paddingBottom: 5,
  },
  rating_container: {
    paddingVertical: 8,
    flexDirection: 'row',
    // alignItems: 'center',
    gap: 2,
  },
  icon: {},
  rate: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
  },
  desc: {
    fontFamily: 'Poppins-Medium',
  },
  footer_container: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: 'green',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  button_container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 150,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#45B39C',
  },
  button_text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});
