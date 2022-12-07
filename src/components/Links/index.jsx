import styled from "styled-components"
import { colors } from "../../style/utils"

function Links (){


    return (
        <LinksContenor>
            
            <Link>Hardskils</Link>
            <Link>Softskills</Link>
            <Link>Projet</Link>
            <Link>Contact</Link>

        </LinksContenor>
    )
  

}


const LinksContenor = styled.div`

height: 10%;
width: 100%;
/* background-color: aliceblue; */
position: absolute;
top: 0;
right: 0;
z-index: 50;
display: flex;
justify-content: flex-end;


`

const Link = styled.button`

height: 50%;
font-size: 20px;

color: ${colors.quaternary};
margin-right: none;
border: 1px solid ${colors.quaternary};
border-top: none;
border-radius: 0 0 20px 20px;
box-shadow: inset 0px -11px 15px 0px #080913;
cursor: pointer;

&:hover{
    box-shadow: none;
    background-color: ${colors.primary};
    color: white;
    transform: scale(1.1);
}

`


export default Links