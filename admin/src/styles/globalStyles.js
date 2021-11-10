import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/*--------------General style---------------- */

  :root{
    --text-white: #ffffff;
    --text-black: #000000;
    --bg-white: #ffffff;
    --bg-black: #000000;
    --text-gray: #555555;
  }


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
img{
  vertical-align: middle;
  width: 100%;
}
`;
