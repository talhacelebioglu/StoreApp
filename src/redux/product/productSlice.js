import {createSlice} from '@reduxjs/toolkit';
import {getItemAsync, getItemIdAsync} from './services';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    details: {},
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      //getItemAsync
      .addCase(getItemAsync.pending, state => {
        state.loading = true;
      })
      .addCase(getItemAsync.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getItemAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //getItemIdAsync
      .addCase(getItemIdAsync.pending, state => {
        state.loading = true;
      })
      .addCase(getItemIdAsync.fulfilled, (state, action) => {
        state.details = action.payload;
        state.loading = false;
      })
      .addCase(getItemIdAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectProducts = state => state.products.items;

export default productSlice.reducer;
