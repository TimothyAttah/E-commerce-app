import { loginStart, loginFailure, loginSuccess } from "./userSlice";
import { publicRequest } from "../requestMethods";
import { getProductStart, getProductSuccess } from "./productSlice";


export const login = async ( dispatch, user ) => {
  dispatch( loginStart() );
  try {
    const res = await publicRequest.post( 'auth/login', user )
    dispatch( loginSuccess( res.data ) )
    localStorage.setItem( 'user', JSON.stringify(res.data));
    console.log( 'login', res.data );
   window.location('/')
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const getProducts = async ( dispatch ) => {
  dispatch( getProductStart() );
  try {
    const res = await publicRequest.post( '/products' )
    dispatch( getProductSuccess( res.data ) )
    localStorage.setItem( 'user', JSON.stringify(res.data));
    console.log( 'login', res.data );
  } catch (err) {
    dispatch(loginFailure())
  }
}