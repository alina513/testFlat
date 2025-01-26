import { createSlice } from '@reduxjs/toolkit';
import { fetchFlats, addFlat, deleteFlat } from './operations';

const flatsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const flatsSlice = createSlice({
  name: 'flats',
  initialState: flatsInitialState,
  extraReducers: builder => {
    builder
    .addCase(fetchFlats.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFlats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = (action.payload);
      })
      .addCase(fetchFlats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addFlat.pending, state => {
        state.isLoading = true;
      })
      .addCase(addFlat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addFlat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFlat.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteFlat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteFlat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const flatsReducer = flatsSlice.reducer;
export default flatsReducer;
