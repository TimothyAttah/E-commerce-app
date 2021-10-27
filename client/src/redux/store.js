// eslint-disable-next-line import/no-unresolved
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';

export default configureStore( {
  reducer: {
    cart: cartReducer
  }
} );
