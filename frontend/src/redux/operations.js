import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/api';

// export const fetchFlats = createAsyncThunk(
//   'flats/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/flats/');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const fetchFlats = createAsyncThunk(
  'flats/fetchFlats',
  async ({ priceMin, priceMax, rooms }, thunkAPI) => {
    try {
      const params = {};
      if (priceMin) params.priceMin = priceMin;
      if (priceMax) params.priceMax = priceMax;
      if (rooms) params.rooms = rooms;

      const response = await axios.get('/flats', { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFlat = createAsyncThunk(
  'flats/addflats',
  async ({ title, description, rooms, price, photos }, thunkAPI) => {
    try {
      const response = await axios.post('/flats', { title, description, rooms, price, photos });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFlat = createAsyncThunk(
  'flats/deleteFlats',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/flats/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
