import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {toggleFavoriteItem} from './campsSlice'
axios.defaults.baseURL = 'https://666756e0a2f8516ff7a72f05.mockapi.io';

export const fetchCamps = createAsyncThunk('camps/fetch', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addFavoriteCamp = createAsyncThunk('camps/add', async (data, thunkAPI) => {
  try {
    // Simulate adding to favorites with a POST request if needed
    // const response = await axios.post('/adverts', data);
    // return response.data;
    thunkAPI.dispatch(toggleFavoriteItem(data)); // Directly dispatch toggleFavoriteItem for simulation
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


// export const addFavoriteCamp = createAsyncThunk('camps/add', async (data, thunkAPI) => {
//   try {
//     const response = await axios.post('/adverts', data)
//     console.log(response.data)
//     return response.data
//   }
//   catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
    
//   }
// })