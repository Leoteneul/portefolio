import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import { colors, screenSize } from '../../style/utils'

function Mailer() {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				String(process.env.REACT_APP_SERVICE_ID),
				String(process.env.REACT_APP_TEMPLATE_ID),
				form.current,
				String(process.env.REACT_APP_PUBLIC_KEY)
			)
			.then(
				(result) => {
					alert('Votre email a correctement été envoyé')
				},
				(error) => {
					console.log(error.text)
				}
			)

		e.target.reset()
	}

	return (
		<Form ref={form} onSubmit={sendEmail}>
			<Label>Nom:</Label>
			<Input type="text" name="user_name" />

			<Label>Email:</Label>
			<Input type="email" name="user_email" />

			<Label>Message:</Label>
			<TextArea name="message" />

			<SendInput type="submit" value="Envoi" />
		</Form>
	)
}

export default Mailer

const Form = styled.form`
	height: 80%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	align-self: center;
	margin-bottom: 50px;
  min-height: 400px;
`
const Label = styled.label`
	font-size: 25px;
	color: ${colors.quaternary};
	padding-left: 15px;
`

const Input = styled.input`
	height: 10%;
	width: 100%;
	border-radius: 15px;
	border: 3px solid #36889f;
	box-shadow: 2px 1px 5px 2px rgba(0, 0, 0, 0.74);
	background-color: ${colors.primary};
	outline: none;
	padding-left: 10px;
	font-size: 20px;
	color: white;

	:focus {
		border: 3px solid ${colors.secondary};
	}
`

const TextArea = styled.textarea`
	height: 30%;
	width: 100%;
	border-radius: 15px;
	border: 3px solid #36889f;
	box-shadow: 2px 1px 5px 2px rgba(0, 0, 0, 0.74);
	background-color: ${colors.primary};
	outline: none;
	padding: 10px 0 0 10px;
	font-size: 20px;
	color: white;

	:focus {
		border: 3px solid ${colors.secondary};
	}
`

const SendInput = styled.input`
	height: 10%;
	width: 25%;
	align-self: center;
	background-color: ${colors.primary};
	font-size: 25px;
	color: ${colors.secondary};
	border: 2px solid ${colors.secondary};
	border-radius: 20px;
	font-family: 'AlfaSlab';
	cursor: pointer;
	:hover {
		background-color: ${colors.secondary};
		color: ${colors.primary};
	}
	@media (max-width: ${screenSize.mobile}) {
		width: 50%;
	}
`