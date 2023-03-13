import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_ITEM_URL} from '@env';

export const getItemAsync = createAsyncThunk(
  'products/getItemAsync',
  async () => {
    const res = await axios.get(API_ITEM_URL);
    return res.data;
  },
);

export const getItemIdAsync = createAsyncThunk(
  'products/getItemIdAsync',
  async id => {
    const res = await axios.get(`${API_ITEM_URL}/${id}`);
    return res.data;
  },
);
