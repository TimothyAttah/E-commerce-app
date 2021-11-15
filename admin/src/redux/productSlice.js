import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice( {
  name: 'product',
  initialState: {
    products: [],
    isFetching: false,
    error: false
  },
  reducers: {
    // GET ALL
    getProductStart: ( state ) => {
      state.isFetching = true
      state.error = false
    },
    getProductSuccess: ( state, action ) => {
      state.isFetching = false
      state.products = action.payload
    },
    getProductFailure: ( state ) => {
      state.isFetching = false
      state.error = true
    },
    // DELETE PRODUCTS
    deleteProductStart: ( state ) => {
      state.isFetching = true
      state.error = false
    },
    deleteProductSuccess: ( state, action ) => {
      state.isFetching = false
      state.products.slice(
        state.products.findIndex( item => item._id === action.payload ),
        1
      );
    },
    deleteProductFailure: ( state ) => {
      state.isFetching = false
      state.error = true
    },
  }
} )

export const {
  getProductFailure, getProductStart, getProductSuccess,
  deleteProductFailure, deleteProductStart, deleteProductSuccess
} = productSlice.actions

export default productSlice.reducer