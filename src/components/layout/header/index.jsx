import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import { LogoIcon, MenuIcon } from "../../../icons";
import { useSpring, animated } from 'react-spring';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const headerSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1200 },
  });

  
  return (
    <div className={styles.background}>
      <Wrapper>
      <animated.div style={headerSpring}>
        <div className={styles.control}>
          <div className={styles.logo}>
            <LogoIcon />
          </div>
          <div className={styles.aboutus}>
            <a href="/">Home</a>
            <a href="/">How</a>
            <a href="/">Projects</a>
            <a href="/">Products</a>
            <a className={styles.a1} href="/">
              Find Me
            </a>
          </div>
          <button onClick={handleOpen}>
            <MenuIcon />
          </button>
        </div>
        {open?<>
         <div onClick={()=>handleOpen()} className={styles.overlay}></div>
        <div className={`${styles.menu} ${open ? styles.open : null}`}>
          <a href="/">Home</a>
          <a href="/">How</a>
          <a href="/">Projects</a>
          <a href="/">Products</a>
          <a className={styles.a1} href="/">
            Find Me
          </a>
        </div>
        </>:null}
        </animated.div>
      </Wrapper>
    </div>
  );
};

export default Header;
