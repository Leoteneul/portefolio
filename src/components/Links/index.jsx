import styled from "styled-components"
import { colors, screenSize } from "../../style/utils"
import { HashLink as Link } from 'react-router-hash-link';

function Links (){


    return (
        <LinksContenor>
            
            <SmoothLink smooth to="#hardskills" >Hardskills</SmoothLink>
            <SmoothLink smooth to="#softskills">Softskills</SmoothLink>
            <SmoothLink smooth to="#projects">Projets</SmoothLink>
            <SmoothLink smooth to="#contact">Contact</SmoothLink>

        </LinksContenor>
    )
  

}


const LinksContenor = styled.div`


display: flex;
justify-content: center;

width: 100%;
min-width: 800px;
/* flex-wrap: wrap; */
/* background-color: red; */
padding: 2px;

@media (max-width: ${screenSize.tablet}) {
       flex-wrap: wrap;
        width: 100%;
        padding: none;
        min-width: 0;
	}


`

const SmoothLink = styled(Link)`


    color: #36889f;
    font-size: 22px;
    padding: 5px 30px 5px 30px;
    border: 3px solid #36889f;
    border-radius: 30px;
    margin: 20px 20px 0 0;

    background-color: transparent;
    cursor: pointer;
    box-shadow: 2px 1px 5px 2px rgba(0,0,0,0.74); 

    :hover{
    background-color: #36889f;
    color: ${colors.primary};
    text-decoration: none;
    /* box-shadow: none;  */
    
}
    
/* height: 50%;
font-size: 20px;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
color: ${colors.quaternary};
margin-right: 20px;
border: 1px solid ${colors.quaternary};
border-top: none;
border-radius: 0 0 20px 20px;
box-shadow: inset 0px -11px 15px 0px #080913;
cursor: pointer; */

/* &:hover{
    
    transform: scale(1.1);
} */

`


export default Links