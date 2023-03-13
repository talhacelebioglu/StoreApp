import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_AUTH_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userLogin = createAsyncThunk(
  'user/userLogin',
  async ({username, password}, {rejectWithValue}) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const {data} = await axios.post(
        `${API_AUTH_URL}/login`,
        {username, password},
        config,
      );
      AsyncStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
