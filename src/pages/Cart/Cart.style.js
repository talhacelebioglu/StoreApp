import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 20,
  },
  header_title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  header_subtitle: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
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
    flexDirection: 'row',
    shadowColor: '#171717',
    elevation: 2,
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 12,
    height: 140,
    width: '100%',
    position: 'relative',
  },
  image: {
    width: 75,
    minHeight: 85,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    letterSpacing: 0.4,
  },
  price: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: 'green',
  },
  footer_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantity_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 70,
  },
  quantity: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  checkout_container: {
    padding: 15,
    backgroundColor: 'white',
  },
  totalprice_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totaltext: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
});
