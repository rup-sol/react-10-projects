import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function ContactForm() {
  const [name, setName] = useState("rupali");
  const [email, setEmail] = useState("rupali@gmail.com");
  const [text, setText] = useState("hello");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[1].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onsubmit={onsubmit}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<MdMail fontSize="24px" />}
          />
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">E-Mail</label>
            <input type="text" name="E-mail" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Text</label>
            <textarea name="text" rows="10" />
          </div>
          <div className={styles.submit_btn}>
            <Button text="Submit" />
          </div>
          <div>{name + " " + email + " " + text}</div>
            
        </form>
      </div>
      <div className={styles.contact_image}>
        <div>
          <img src="/images/Service.png" alt="Service" />
        </div>
       
      </div>
    </section>
  );
}

export default ContactForm;
