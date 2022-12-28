import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { colors } from '../../style/utils';


function Mailer() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(String(process.env.REACT_APP_SERVICE_ID), String(process.env.REACT_APP_TEMPLATE_ID), form.current, String(process.env.REACT_APP_PUBLIC_KEY))
      .then((result) => {
          alert('Votre email a correctement été envoyé');
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Label>Nom</Label><br/>
      <Input type="text" name="user_name" /><br/>
      <Label>Email</Label><br/>
      <Input type="email" name="user_email" /><br/>
      <Label>Message</Label><br/>
      <TextArea name="message" /><br/>
      <SendInput type="submit" value="Envoi" />
    </Form>
  );
};

export default Mailer


const Form = styled.form`


height: 80%;
width: 100%;

/* background-color: yellow; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-self: center;
/* box-shadow: 2px 1px 12px 5px rgba(0,0,0,0.74); */
padding: 20px;

`
const Label = styled.label`

font-size: 25px;
color: ${colors.quaternary};


`

const Input = styled.input`

height: 10%;
width: 70%;
border-radius: 15px;
border: 3px solid #36889f;
box-shadow: 2px 1px 5px 2px rgba(0,0,0,0.74); 
background-color: ${colors.primary};
outline: none;
padding-left: 10px;
font-size: 20px;
color: white;

:focus{

  border: 3px solid ${colors.secondary};
}
`

const TextArea = styled.textarea`


height: 30%;
width: 70%;
border-radius: 15px;
border: 3px solid #36889f;
box-shadow: 2px 1px 5px 2px rgba(0,0,0,0.74); 
background-color: ${colors.primary};
outline: none;
padding-left: 10px;
font-size: 20px;
color: white;

:focus{

border: 3px solid ${colors.secondary};
}

`

const SendInput = styled.input`


height: 15%;
width: 25%;
align-self: center;
background-color: ${colors.primary};
font-size: 25px;
color: ${colors.secondary};
border: 2px solid ${colors.secondary};
border-radius: 20px;
cursor: pointer;
:hover{
    background-color: ${colors.secondary};
    color: ${colors.primary};
    /* box-shadow: none;  */
    
}

`