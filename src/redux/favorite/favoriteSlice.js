import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    // favorites: AsyncStorage.getItem('favorites')
    //   ? JSON.parse(AsyncStorage.getItem('favorites'))
    //   : [],
    // redux-persist ile yapılacak
    favorites: [],
  },
  reducers: {
    addFav: (state, action) => {
      const itemFav = state.favorites.find(
        item => item.id === action.payload.id,
      );
      if (itemFav) {
        Alert.alert('Already exists on your list!');
        return;
      } else {
        state.favorites.push({...action.payload});
        Alert.alert('Product added to favorites!');
      }
      // AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },

    removeFav: (state, action) => {
      const itemFav = state.favorites.filter(
        item => item.id !== action.payload.id,
      );
      state.favorites = itemFav;
      Alert.alert('Product removed from favorites!');
      // AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const {addFav, removeFav} = favoriteSlice.actions;
export default favoriteSlice.reducer;
