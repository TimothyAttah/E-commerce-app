import { loginStart, loginFailure, loginSuccess } from "./userSlice";
import { publicRequest } from "../requestMethods";

export const login = async ( dispatch, user ) => {
  dispatch( loginStart() );
  try {
    const res = await publicRequest.post( 'auth/login', user )
    dispatch( loginSuccess( res.data.user ) )
    console.log('login', res.data.user );
  } catch (err) {
    dispatch(loginFailure())
  }
}