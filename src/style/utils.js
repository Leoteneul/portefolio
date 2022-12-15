import { createGlobalStyle } from "styled-components"
import AlfaSlab from '../asset/AlfaSlab.ttf'


export const colors = {
    primary: '#0b1d25',
    secondary: '#e67920',
    tertiary: '#b64005',
    quaternary: '#36889f'
}

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'AlfaSlab';
    src: url(${AlfaSlab});
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}



h1{
    font-size: 45px;
    font-family: 'AlfaSlab';
    letter-spacing: 3px;
}

h2{
    font-family: 'AlfaSlab';
    color: ${colors.secondary};
    letter-spacing: 3px;
    font-size: 30px;
    margin-bottom: 10px;
}

h3{
    font-family: 'AlfaSlab';
    letter-spacing: 3px;
    font-weight: lighter;

}
p{
    font-family: 'AlfaSlab';
    color: white;
    /* margin-bottom: 50px; */
    
}
a{
    color: ${colors.quaternary};
    text-decoration: none;
    font-family: 'AlfaSlab';
}

button{
    font-family: 'AlfaSlab';
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
    /* box-shadow: none;  */
    
}










::-webkit-scrollbar {
    width: 20px;
    
    
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px #0b1d25;
    border: solid 3px #0b1d25;
}

::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px white;
    border-radius: 5px;
    
    border: solid 2px transparent;
}

`


export default GlobalStyle


