import { createSlice } from '@reduxjs/toolkit';
import { fetchFlats, addFlat, deleteFlat, updateFlat } from './operations';

const flatsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  updateStatus: null,
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
          flat => flat._id !== action.payload._id
        );
      })
      .addCase(deleteFlat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateFlat.pending, state => {
        state.updateStatus = 'loading';
        state.isLoading = true;
      })
      .addCase(updateFlat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.updateStatus = 'success';
        const index = state.items.findIndex(flat => flat._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateFlat.rejected, (state, action) => {
        state.updateStatus = 'error';
        state.isLoading = false;
        state.error = action.payload;
      });;
  },
});

const flatsReducer = flatsSlice.reducer;
export default flatsReducer;
