import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/javascript-store-products';

const initialState = {
  products: [],
  cartItems: [],
  cartSubTotal: 0,
  cartTotol: 0,
  cartTax: 0,
  isLoading: true,
  error: '',
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const product = { ...state.products.find((x) => x.id === payload) };
      product.fields.inCart = true;
      state.cartItems.push(product);
      return state;
    },
    clearCart: (state) => ({
      ...state,
      cartItems: [],
    }),
    removeItem: (state, { payload }) => ({
      ...state,
      cartItems: [...state.cartItems.filter((item) => item.id !== payload)],
    }),
    increase: (state, { payload }) => {
      const item = { ...state.cartItems.find((item) => item.id === payload) };
      item.fields.count += 1;
      item.fields.total = item.fields.price * item.fields.count;
      return state;
    },
    decrease: (state, { payload }) => {
      const item = { ...state.cartItems.find((item) => item.id === payload) };
      item.fields.count -= 1;
      item.fields.total = item.fields.price * item.fields.count;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getProducts.fulfilled, (state, action) => ({
        ...state,
        products: [...action.payload.map((item) => {
          const itemCopy = { ...item };
          itemCopy.fields.inCart = false;
          itemCopy.fields.total = 0;
          itemCopy.fields.count = 0;
          return itemCopy;
        })],
        isLoading: false,
      }))
      .addCase(getProducts.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'Something went wrong',
      }));
  },
});

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  addToCart,
} = productsSlice.actions;

export default productsSlice.reducer;
