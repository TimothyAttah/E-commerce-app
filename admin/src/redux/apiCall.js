import { loginStart, loginFailure, loginSuccess } from "./userSlice";
import { publicRequest } from "../requestMethods";


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