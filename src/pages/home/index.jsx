import React from 'react';
import { useSpring, animated} from 'react-spring';
import Background from '../../components/background';
import Fatima from '../../components/fatima';
import Projects from '../../components/projects';
import FindMe from '../../components/findme';
import ContactMe from '../../components/contactme';

const Home = () => {


  const [backgroundSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1200 },
  }));

  const [fatimaSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1200 },
  }));

  const [projectsSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1200 },
  }));

  const [findMeSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1200 },
  }));

  const [contactMeSpring] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1200 },
  }));






  return (
    <div>
      <animated.div style={backgroundSpring}>
        <Background />
      </animated.div>
      <animated.div style={fatimaSpring}>
        <Fatima />
      </animated.div>
      <animated.div style={projectsSpring}>
        <Projects />
      </animated.div>
      <animated.div style={findMeSpring}>
        <FindMe />
      </animated.div>
      <animated.div style={contactMeSpring}>
        <ContactMe />
      </animated.div>
    </div>
  );
};

export default Home;
