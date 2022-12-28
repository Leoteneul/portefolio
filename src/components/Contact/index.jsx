import styled from "styled-components"
import { colors, screenSize } from "../../style/utils"
import phone from '../../asset/phone.png'
import Mailer from "./Mailer"


function Contact ({ animFive }){

    let className = 'phoneMoveOff'
    if(animFive){
        className = 'phoneMoveOn'
    }

    function handleCopy(e) {
		navigator.clipboard.writeText(e.target.innerText)
		alert('Email ajouté au presse papier')
	}
    function handleCV() {
		window.location = "CV_Teneul_Léo.pdf"
		
	}

    return (
        <ContactContenor id="contact">
            
            <PhonePicture src={phone} alt="" className={className}/>
            <Text>
                <h2>Me Contacter</h2>
                

                <Mailer />
                
                <InfoWrapper onClick={handleCopy}>leoteneul@gmail.com</InfoWrapper>
                <InfoWrapper onClick={handleCV}>CV</InfoWrapper>
                
                
            </Text>
        </ContactContenor>
    )
  

}

const ContactContenor = styled.div`


height: 100vh;
background-color: ${colors.primary};

display: flex;
justify-content: center;
align-items: center;

@media (max-width: ${screenSize.tablet}) {
    flex-direction: column;
    } 

`

const PhonePicture = styled.img`


transform-origin: top;
margin-right: 200px;
align-self: flex-start;
/* background-color: green; */

@media (max-width: ${screenSize.tablet}) {
    align-self: unset;
    margin-right: 0;
}


`
const Text = styled.div`

    height: 80%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${screenSize.tablet}) {
    
        width: 100%;
    }
    
    /* background-color: red; */
    

`

const InfoWrapper = styled.p`

align-self: flex-start;
font-size: 18px;
cursor: pointer;
color: ${colors.quaternary};
:hover{
    text-decoration: underline;
    transform: scale(1.3);
}

@media (max-width: ${screenSize.tablet}) {
    padding: 0 0 20px 20px;
}
`


export default Contact