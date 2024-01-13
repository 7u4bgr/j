import React from "react";
import styles from "./index.module.css";
import Wrapper from '../../UI/wrapper'
import Logo from '../../../assets/images/logo1.svg'
import { useSpring,animated } from "react-spring";
const ContactMe = () => {
  const footerSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1200 },
  });
  return (
    <div className={styles.background}>
      <animated.div style={footerSpring}>

      <Wrapper>

        <div className={styles.control}>
          <div className={styles.textcomponent}>
            <img src={Logo} alt="" />
            <h2>FATIMA  BASHIRLI</h2>
          </div>
          <div className={styles.text1}>
            <h2>UI/UX Designer /  Web Designer Ready For Your Service</h2>
          </div>
        

        </div>
      </Wrapper>
      </animated.div>
      
    </div>
  );
};

export default ContactMe;
