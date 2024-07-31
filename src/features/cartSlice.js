import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let url =
  "https://online-json-server-api.up.railway.app/project/66a0e8d21d2cd3rb11443570/desserts";
export const getProducts = createAsyncThunk("product", async () => {
  const req = await fetch(url);
  const { data } = await req.json();
  return data;
});

const initialState = {
  products: [],
  totalProducts: 0,
  totalPrice: 0,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItem: (state, { payload }) => {},
    decrementItem: (state, { payload }) => {},
    calculateTotal: (state, { payload }) => {},
  },
});

extraReducers: (builder) => {
  builder
    .addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    })
    .addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
};

const { calculateTotal, decrementItem, incrementItem } = cartSlice.actions;
export default cartSlice.reducer;
