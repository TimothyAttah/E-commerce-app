import { loginStart, loginFailure, loginSuccess } from "./userSlice";
import { publicRequest, userRequest } from "../requestMethods";
import {
  addProductFailure, addProductStart, addProductSuccess,
  deleteProductFailure, deleteProductStart, deleteProductSuccess,
  getProductFailure, getProductStart, getProductSuccess,
  updateProductFailure, updateProductStart, updateProductSuccess
} from "./productSlice";


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
    const res = await publicRequest.get( '/products' )
    dispatch( getProductSuccess( res.data.products ) )
    console.log( 'products>>>>', res.data.products );
  } catch (err) {
    dispatch(getProductFailure())
  }
}
export const addProduct = async (product, dispatch ) => {
  dispatch( addProductStart() );
  try {
    const res = await userRequest.post( `/products/create`, product )
    dispatch( addProductSuccess( res.data ) )
    console.log( 'productsAdd>>>>', res.data );
  } catch (err) {
    dispatch(addProductFailure())
  }
}
export const updateProduct = async (id,product, dispatch ) => {
  dispatch( updateProductStart() );
  try {
    const res = await userRequest.put( `/products/update/${id}` )
    dispatch( updateProductSuccess( {id, product} ) )
    console.log( 'productsUpdate>>>>', res.data );
  } catch (err) {
    dispatch(updateProductFailure())
  }
}
export const deleteProduct = async (id, dispatch ) => {
  dispatch( deleteProductStart() );
  try {
    const res = await userRequest.delete( `/products/delete/${id}` )
    dispatch( deleteProductSuccess( id ) )
    console.log( 'productsDelete>>>>', res.data );
  } catch (err) {
    dispatch(deleteProductFailure())
  }
}