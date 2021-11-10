import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/*--------------General style---------------- */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 16px;
  }
  body{
    font-family: 'Source Sans Pro', sans-serif;
  }
  ul {
	text-decoration: none;
	margin: 0;
	padding: 0;
  list-style: none;
}

button {
	outline: none;
	cursor: pointer;
	border: none;
}

a {
	text-decoration: none;
}

input {
	outline: none;
  border: none;
}
`;
