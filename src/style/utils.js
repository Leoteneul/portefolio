import { createGlobalStyle } from "styled-components"


export const colors = {
    primary: '#171717',
    secondary: '#f1f1f1',
    tertiary: '#fd2d01'
}

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1{
    font-size: 60px;
}

`


export default GlobalStyle


