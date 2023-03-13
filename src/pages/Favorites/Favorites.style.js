import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  landing_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  landing_text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  card_container: {
    shadowColor: '#171717',
    elevation: 5,
    backgroundColor: 'white',
    marginVertical: 12,
    marginHorizontal: 8,
    padding: 10,
    borderRadius: 5,
    height: 300,
    width: 180,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 2,
  },
  image: {
    width: '100%',
    minHeight: 160,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    paddingTop: 8,
    paddingHorizontal: 5,
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    letterSpacing: 0.4,
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: 'green',
  },
});
