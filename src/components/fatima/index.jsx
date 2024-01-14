import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Fatima1 from "../../assets/images/fatima.png";
const Fatima = () => {
  return (
    <div id="about" className={styles.background}>
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
                I'm Fatima Bashirli, a UI/UX Designer. I Bring Ideas To Life
                Through Design, From Captivating Landing Pages To User-Friendly
                Apps and Dashboards. Let's Create Something Extraordinary
                Together.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Fatima;
