import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

// const TOKEN = ''

// const TOKEN = JSON.parse( localStorage.getItem( 'user' ) );
// const accessToken = TOKEN?.accessToken


const userToken = JSON.parse( localStorage.getItem( 'persist:root' ));

const user = JSON.parse(userToken.user)
const TOKEN = user.currentUser.accessToken
  
// const TOKEN = JSON.parse(
//   JSON.parse(localStorage.getItem('persist:root')).TOKEN
// ).accessToken;




export const publicRequest = axios.create( {
  baseURL: BASE_URL
} );

export const userRequest = axios.create( {
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
} );
