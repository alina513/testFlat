import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.baseURL = "https://testflat-backend.onrender.com/api";

export const fetchFlats = createAsyncThunk(
  "flats/fetchFlats",
  async ({ priceMin, priceMax, rooms }, thunkAPI) => {
    try {
      const params = {};
      if (priceMin) params.priceMin = priceMin;
      if (priceMax) params.priceMax = priceMax;
      if (rooms) params.rooms = rooms;

      const response = await axios.get("/flats", { params });
      return response.data;
    } catch (e) {
      toast.error("Виникла помилка. Спробуй перезавантажити.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFlatById = createAsyncThunk(
  "flats/fetchFlatById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/flats/${id}`);
      return response.data;
    } catch (e) {
      toast.error("Виникла помилка. Спробуй перезавантажити.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFlat = createAsyncThunk(
  "flats/addflats",
  async ({ title, description, price, rooms }, thunkAPI) => {
    try {
      const response = await axios.post("/flats", {
        title,
        description,
        price,
        rooms,
      });
      return response.data;
    } catch (e) {
      toast.error("Виникла помилка. Спробуй перезавантажити.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFlat = createAsyncThunk(
  "flats/deleteFlats",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/flats/${id}`);
      return response.data;
    } catch (e) {
      toast.error("Виникла помилка. Спробуй перезавантажити.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateFlat = createAsyncThunk(
  "flats/updateFlat",
  async ({ id, ...fields }, thunkAPI) => {
    try {
      const response = await axios.put(`/flats/${id}`, fields);
      return response.data;
    } catch (e) {
      toast.error("Виникла помилка. Спробуй перезавантажити.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
