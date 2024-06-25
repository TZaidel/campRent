import { fetchCamps, toggleFavoriteCamp } from './operations';
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
      const index = state.items.findIndex(item => item._id === id);
      if (index !== -1) {
        const item = state.items[index];
        if (state.favoriteItems.some(favItem => favItem._id === id)) {
          state.favoriteItems.filter(favItem => favItem._id !== id);
        } else {
          state.favoriteItems.push(item);
        }
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
        state.items = action.payload.map(item => ({
          ...item,
          favorite: false,
        }));
      })

      .addCase(fetchCamps.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      }),
});

export const { toggleFavoriteItem } = slice.actions;
export default slice.reducer;
