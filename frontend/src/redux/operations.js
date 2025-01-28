import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateFlatPhoto = async (flatId, file) => {
  const formData = new FormData();
  formData.append("photo", file);

  try {
    const response = await axios.put(`/api/flats/${flatId}/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Photo updated:", response.data.photo);
  } catch (error) {
    console.error("Error updating photo:", error.response.data.message);
  }
};
