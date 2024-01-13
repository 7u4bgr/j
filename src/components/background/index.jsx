import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import { Link } from "react-router-dom";
const Background = () => {
  return (
    <div id="home" className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.h2text}>
            <h2>Crafting Brand Triumph through UI/UX Design</h2>
          </div>
          <div className={styles.ptext}>
            <p>
              I specialize in crafting exceptional user experiences through UIUX
              design, ensuring seamless and enjoyable interactions
            </p>
          </div>
          <div className={styles.buttons}>
            <Link
              target="_blank"
              to={"https://www.behance.net/fatimabashirli/projects"}
              className={styles.button1}
            >
              My Portfolio
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/fatima-bashirli-104348286/"}
              className={styles.button2}
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Background;
