import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  font-family: 'Roboto', sans-serif;
  font-size: 62,5%;
}

body {
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({theme}) => theme.COLORS.WHITE_100};
}

body, input, button, textarea {
  font-family: "roboto", serif;
}

a {
  text-decoration: none;
}

a, button {
  cursor: pointer;
  transition: filter 0.2s;
}

a:hover, button:hover {
  filter: brightness(0.9);
}

`;