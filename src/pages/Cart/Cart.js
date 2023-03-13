import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch, useSelector} from 'react-redux';
import {decQty, incQty, removeFromCart} from '../../redux/cart/cartSlice';

import Button from '../../components/Button';
import styles from './Cart.style';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => (total = total + item.price * item.quantity),
    0,
  );

  // const totalItem = cartItems.reduce(
  //   (total, item) => (total = total + item.quantity),
  //   0,
  // );

  const renderCartItems = ({item}) => (
    <TouchableWithoutFeedback>
      <View style={styles.card_container}>
        {item.image && (
          <Image style={styles.image} source={{uri: item?.image}} />
        )}
        <View style={styles.body_container}>
          <Text style={styles.title} numberOfLines={2}>
            {item?.title}
          </Text>
          <Text style={styles.price}>$ {item?.price}</Text>
          <View style={styles.footer_container}>
            <View style={styles.quantity_container}>
              <Icon
                name="minus-box-outline"
                size={22}
                onPress={() => dispatch(decQty(item.id))}
              />
              <Text style={styles.quantity}>{item.quantity}</Text>
              <Icon
                name="plus-box-outline"
                size={22}
                onPress={() => dispatch(incQty(item.id))}
              />
            </View>
            <Icon
              name="trash-can-outline"
              size={22}
              color="#c62828"
              onPress={() => dispatch(removeFromCart(item.id))}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <View style={styles.landing_container}>
          <Text style={styles.landing_text}>Cart is empty!</Text>
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.header_title}>My Cart</Text>
            <Text style={styles.header_subtitle}>
              ({cartItems.length} items)
            </Text>
          </View>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={renderCartItems}
          />
          <View style={styles.checkout_container}>
            <View style={styles.totalprice_container}>
              <Text style={styles.totaltext}>Total</Text>
              <Text style={styles.totaltext}>$ {totalPrice.toFixed(2)}</Text>
            </View>
            <Button text="Check out" />
          </View>
        </>
      )}
    </>
  );
};

export default Cart;
