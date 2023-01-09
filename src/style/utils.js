import { createGlobalStyle } from "styled-components"
import AlfaSlab from '../asset/AlfaSlab.ttf'


export const colors = {
    primary: '#0b1d25',
    secondary: '#e67920',
    tertiary: '#b64005',
    quaternary: '#36889f'
}
export const screenSize = {
    tablet: '1025px',
    mobile: '600px'
}

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'AlfaSlab';
    src: url(${AlfaSlab});
}

@font-face {
    font-family: 'QuickSand';
    src: url('/Quicksand.ttf');
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'AlfaSlab';
    
}



h1{
    font-size: 40px;
    letter-spacing: 3px;
}

h2{
    font-weight: 400;
    color: ${colors.secondary};
    letter-spacing: 3px;
    font-size: 30px;
    margin-bottom: 10px;
}

h3{
    letter-spacing: 3px;
    font-weight: lighter;

}
p{
    font-family: 'QuickSand';
    color: white;
    font-size: 18px;
    
}
a{
    color: ${colors.quaternary};
    text-decoration: none;
    word-break: break-all;
    margin-top: 20px;

    :hover{
        text-decoration: underline;
    }
}

button{
    color: #36889f;
    font-size: 22px;
    padding: 10px 40px 10px 40px;
    border: 3px solid #36889f;
    border-radius: 30px;
    margin-right: 20px;
    background-color: transparent;
    cursor: pointer;
    box-shadow: 2px 1px 5px 2px rgba(0,0,0,0.74); 
    
}

button:hover{
    background-color: #36889f;
    color: ${colors.primary};    
}

strong{
    color: #e67920;
    font-weight: unset;
}
span{
    color: #36889f;
    text-decoration: underline;
    font-weight: lighter;
}


input, textarea{
    font-family: 'QuickSand';
}



::-webkit-scrollbar {
    width: 20px;
    
    
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px #0b1d25;
    border: solid 3px #0b1d25;
}

::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px #36889f;
    border-radius: 5px;
    
    border: solid 2px transparent;
}

`


export default GlobalStyle


