import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import authReducer from './auth/authSlice';
import productsReducer from './product/productSlice';
import favoriteReducer from './favorite/favoriteSlice';
import cartReducer from './cart/cartSlice';

// const logger = reduxLogger.createLogger();

export const store = configureStore({
  reducer: {
    user: authReducer,
    products: productsReducer,
    favorites: favoriteReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
