import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Travel from "../../assets/images/travel.png";
import Azercell from "../../assets/images/azercell.png";
import Fatima from "../../assets/images/fatimaaa.png";
import { ArrowRightIcon } from "../../icons";
import { Link } from "react-router-dom";
const Projects = () => {
  const [data, setData] = useState([
    {
      photo: `${Azercell}`,
      name: "Azercell Design",
      title: "UI/UX and Web Design",
      overview:
        "Azercell - Mobile Communications & Telecom Industry Leader And The Only Telecom Operator That Provides Digital Products And Solutions in Azerbaijan. Es. ",
      view: "All View",
      link: "https://www.behance.net/gallery/189224639/Azercell-Website-design",
    },
    {
      photo: `${Fatima}`,
      name: "Personal Portfolio",
      title: "Website Design",
      overview:
        "I Am Excited To Launch My Newly Created Personal Website. An Elegant Blend Of Simple And Minimalistic Elements, I Created The Website in a Visually Captivating And Sophisticated Design That Enhances Both Its Aesthetics And Overall Appeal.",
      view: "All View",
      link: "https://www.behance.net/gallery/189112401/Personal-Portfolio-2024",
    },
    {
      photo: `${Travel}`,
      name: "Travel Mobil App",
      title: "UI/UX design",
      overview:
        "Travel APP is a Platform Where Travelers Will Be Able To Pick The Best Package By Comparing It From Travel Packages Of Different Travel Agencies Or Travel Groups. They Can Also Customize It As Per Their Choice. The Biggest Advantage Is That The Verificat.",
      view: "All View",
      link: "https://www.behance.net/gallery/185703843/Travel-Mobiel-App-Case-Study",
    },
  ]);
  return (
    <div id="projects" className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.textcomponent}>
            <p>Projects</p>
            <h2>Real Projects With Clients</h2>
          </div>
          <div className={styles.map}>
            {data?.map((item) => (
              <Link
                target="_blank"
                to={item.link}
                className={styles.mapcontrol}
              >
                <div className={styles.images}>
                  <img src={item.photo} alt="" />
                </div>
                <div className={styles.texts}>
                  <div className={styles.text1}>
                    <h2>{item.name}</h2>
                    <p>{item.title}</p>
                  </div>
                  <div className={styles.text2}>
                    <p>{item.overview}</p>
                  </div>
                  <div className={styles.text3}>
                    <Link to={item.link}>
                      <ArrowRightIcon />
                      {item.view}
                    </Link>
                    <hr />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Projects;
