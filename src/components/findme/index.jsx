import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { Link } from "react-router-dom";
const FindMe = () => {

  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.textcomponent}>
            <p>Find Me</p>
            <h2>Where Can You Find Me</h2>
          </div>
          <div className={styles.links}>
                <Link target="_blank" to={"https://www.behance.net/fatimabashirli/projects"}>Behance</Link>
                <Link target="_blank" to={"https://www.linkedin.com/in/fatima-bashirli-104348286/"}>Linkedin</Link>
                <Link target="_blank" to={"https://www.instagram.com/ffedesign_/"}>Instagram</Link>
          </div>

        </div>
      </Wrapper>
    </div>
  );
};

export default FindMe;
