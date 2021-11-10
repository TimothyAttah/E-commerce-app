import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/*--------------General style---------------- */

  :root{
    --text-white: #ffffff;
    --text-black: #000000;
    --bg-white: #ffffff;
    --bg-black: #000000;
    --text-gray: #555555;
    --light-bg: rgb(251,251,255);
    --light-gray: rgb(187,186,186);
    --dark-gray: rgb(240,240,255);
    --green: green;
    --red: red;
    --darkBlue: darkblue;
    --gray: gray;
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
