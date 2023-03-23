import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  // const BASE_LINK =  "https://nerd-commerce-api.onrender.com/products";
  const BASE_LINK = "http://localhost:3000/products";
  const fetchConfig = { headers: { "Access-Control-Allow-Origin": "*" } };

  const response = await fetch(BASE_LINK, fetchConfig);
  const data = await response.json();

  return data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default productsSlice.reducer;
