// eslint-disable-next-line import/no-unresolved
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import userSlice from './userSlice';

export default configureStore( {
  reducer: {
    cart: cartSlice,
    user: userSlice
  }
} );
