import styled from "styled-components"
import { colors } from "../../style/utils"
import phone from '../../asset/phone.png'
import Mailer from "./Mailer"


function Contact ({ animFive }){

    let className = 'phoneMoveOff'
    if(animFive){
        className = 'phoneMoveOn'
    }

    




    return (
        <ContactContenor>
            
            <PhonePicture src={phone} alt="" className={className}/>
            <Text>
                <h2>Me Contacter</h2>
                <p>leoteneul@gmail.com</p>

                <Mailer></Mailer>
                
            </Text>
        </ContactContenor>
    )
  

}

const ContactContenor = styled.div`


height: 100vh;
background-color: ${colors.primary};

display: flex;
justify-content: center;


`

const PhonePicture = styled.img`


transform-origin: top;
margin-right: 200px;


`
const Text = styled.div`

    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const Form = styled.form`


height: 40%;
width: 100%;
background-color: ${colors.primary};

`

export default Contact