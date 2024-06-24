import { fetchCamps } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'camps',
  initialState: {
    items: [],
    favoriteItems: [],
    loading: false,
    error: false,
  },
  reducers: {
    toggleFavoriteItem: (state, action) => {
      const camp = action.payload;
      const index = state.favoriteItems.findIndex(item => item.id === camp.id);
      if (index !== -1) {
        state.favoriteItems.splice(index, 1);
      } else {
        state.favoriteItems.push(camp);
      }
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCamps.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCamps.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCamps.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      }),
});

export const { toggleFavoriteItem } = slice.actions;
export default slice.reducer;
