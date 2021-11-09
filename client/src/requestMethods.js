import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzdlM2JjM2EzZGU1NzEyNDliYmY0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTMwNzczNCwiZXhwIjoxNjM1NTY2OTM0fQ.sDItV8Rg296z3Khg3dcsvHp-va2y8lHj1OGEyDECG_w';

export const publicRequest = axios.create( {
  baseURL: BASE_URL
} );

export const userRequest = axios.create( {
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
} );
