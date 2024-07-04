import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://666756e0a2f8516ff7a72f05.mockapi.io';

export const fetchCamps = createAsyncThunk('camps/fetch', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const toggleFavoriteCamp = () => {};
