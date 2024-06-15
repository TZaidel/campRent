import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit' 

// axios.defaults.baseURL = 'https://666756e0a2f8516ff7a72f05.mockapi.io';

const slice = createSlice({
  name: 'camps',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchPending(state, action) {
      state.error = false;
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.error = false;
      state.loading = false;
      state.items.push(...action.payload);
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = true;
    },
  },
});

const { fetchSuccess, fetchError, fetchPending } = slice.actions;

export const fetchCamps = () => async dispatch => {
  try {
    dispatch(fetchPending());
    const response = await axios.get('https://666756e0a2f8516ff7a72f05.mockapi.io');
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchError());
  }
};


export default slice.reducer