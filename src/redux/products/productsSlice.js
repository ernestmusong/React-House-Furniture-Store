import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/javascript-store-products';

const initialState = {
  products: [],
  cartItems: [],
  modalOpen: false,
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
    populatateNewProducts: (state) => {
      state.products.forEach((item) => {
        const newItem = {
          ...item, inCart: false, count: 0, total: 0,
        };
        const newProducts = state.newProducts.push(newItem);
        return newProducts;
      });
    },
    addToCart: (state, action) => {
      const item = state.newProducts.find((item) => item.id === action.payload.id);
      const newItem = { ...item, inCart: true };
      state.cartItems.push(newItem);
      return state.cartItems;
    },
    clearCart: (state) => ({
      ...state,
      cartItems: [],
    }),
    removeItem: (state, action) => ({
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
    }),
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.count += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },
    openModal: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },
    closeModal: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
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
          itemCopy.total = 0;
          itemCopy.count = 0;
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
  populatateNewProducts,
  openModal,
  closeModal,
  addToCart,
} = productsSlice.actions;

export default productsSlice.reducer;
