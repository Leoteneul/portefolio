import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Mailer() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(String(process.env.REACT_APP_SERVICE_ID), String(process.env.REACT_APP_TEMPLATE_ID), form.current, String(process.env.REACT_APP_PUBLIC_KEY))
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Mailer