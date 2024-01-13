import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { Link } from "react-router-dom";
const ContactMe = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.textcomponent}>
            <p>Contact Me</p>
            <h2>I’m Up and Running, Let’s Chat!</h2>
          </div>
          <div className={styles.links}>
            <a href="mailto:fatima.bashirli02@gmail.com">E-mail</a>
            <Link target="_blank" to={"https://wa.me/507487048"}>Whatsapp</Link>
            <Link target="_blank" to={"https://t.me/+994507487048"}>Telegram</Link>
            <Link target="_blank" to={"https://www.instagram.com/ffedesign_/"}>Instagram</Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactMe;
