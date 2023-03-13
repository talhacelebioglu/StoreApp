import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        item => item.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({...action.payload, quantity: 1});
        Alert.alert('Product added to cart!');
      }
    },
    removeFromCart: (state, action) => {
      const itemRemoveCart = state.cartItems.filter(
        item => item.id !== action.payload,
      );
      state.cartItems = itemRemoveCart;
      Alert.alert('Product removed from cart!');
    },
    incQty: (state, action) => {
      const itemQtyCart = state.cartItems.find(
        item => item.id === action.payload,
      );
      itemQtyCart.quantity++;
    },
    decQty: (state, action) => {
      const itemQtyCart = state.cartItems.find(
        item => item.id === action.payload,
      );
      if (itemQtyCart.quantity === 1) {
        itemQtyCart.quantity = 1;
      } else {
        itemQtyCart.quantity--;
      }
    },
  },
});

export const {addToCart, removeFromCart, incQty, decQty} = cartSlice.actions;
export default cartSlice.reducer;
