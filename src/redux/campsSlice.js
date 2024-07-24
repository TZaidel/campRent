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
      const id = action.payload;
      const item = state.items.find(item => item._id === id);
      if (item) {
        const isFavorite = state.favoriteItems.some(favItem => favItem._id === id);
        if (isFavorite) {
          state.favoriteItems = state.favoriteItems.filter(favItem => favItem._id !== id);
        } else {
          state.favoriteItems.push(item);
        }
      }
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCamps.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCamps.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.map(item => ({
          ...item,
          favorite: false,
        }));
      })

      .addCase(fetchCamps.rejected, state => {
        state.error = true;
        state.loading = false;
      }),
});

export const { toggleFavoriteItem } = slice.actions;
export default slice.reducer;
