import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useContext } from "react";


const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xxbfqso", "template_iusaubb", form.current, {
        publicKey: "YH28aM0vqzafMJsrU",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // ✅ clear form after success
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get In Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" placeholder="Name"  required/>
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email" required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
           required></textarea>
          <input type="submit" className="button" value="Send" />

          <span>{done && "Thanks for contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
