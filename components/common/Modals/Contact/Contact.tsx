import React from "react";
import emailjs from "emailjs-com";

import styles from "./Contact.module.css";

const Contact = ({ setContactOpen }: any) => {
  const nameRef = React.useRef(null);
  const companyRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const messageRef = React.useRef(null);

  const sendMessage = () => {
    emailjs
      .send(
        "service_3f9w4k3",
        "template_4jmindm",
        {
          message: messageRef.current.value,
          name: nameRef.current.value,
          company: companyRef.current.value,
          email: emailRef.current.value,
        },
        "6wX2WN7sKCF7DMK3x"
      )
      .then((response) => {
        console.log("Email successfully sent!", response);
      })
      .then(() => {})
      .catch((error) => {
        console.log("An error occurred while sending the email.", error);
      });
  };

  return (
    <div className={styles.modal}>
      <div
        className={styles.modalBg}
        onClick={() => {
          setContactOpen(false);
        }}
      />
      <div className={styles.modalInner}>
        <h2>Get In Touch</h2>
        <form>
          <input type="text" placeholder="Full Name" ref={nameRef} />
          <input type="text" placeholder="Company" ref={companyRef} />
          <input type="text" placeholder="Email Address" ref={emailRef} />
          <textarea placeholder="Your Message" ref={messageRef}></textarea>
          <button onClick={sendMessage}>Send</button>
        </form>
        <div
          className={styles.closeBtn}
          onClick={() => {
            setContactOpen(false);
          }}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default Contact;
