import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Fatima1 from "../../assets/images/fatima.png";
const Fatima = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.images}>
            <img src={Fatima1} alt="" />
          </div>
          <div className={styles.flextext}>
            <div className={styles.about}>
              <p>About us</p>
              <h2>
                Who is Fatima <h3>UIUX Web</h3> Designer?
              </h2>
            </div>
            <div className={styles.ptext}>
              <p>
                I'm fatima Bashirli, a UI/UX Designer. I bring ideas to life
                through design, from captivating landing pages to user-friendly
                apps and dashboards. Let's create something extraordinary
                together.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Fatima;
