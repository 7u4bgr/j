import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Travel from "../../assets/images/travel.png";
import Weather from "../../assets/images/weather.png";
import Khuran from "../../assets/images/khuran.png";
import { ArrowRightIcon } from "../../icons";
import { Link } from "react-router-dom";
const Projects = () => {
  const [data, setData] = useState([
    {
      photo: `${Travel}`,
      name: "Travel Mobil App",
      title: "UI/UX design",
      overview:
        "These Apps Typically Include Features For Trip Planning, Accommodation Reservations, Flight Tracking, Itinerary Planning, Local Activities, And Restaurant Recommendations. Es.",
      view: "All View",
      link: "https://www.behance.net/gallery/185703843/Travel-Mobiel-App-Case-Study",
    },
    {
      photo: `${Weather}`,
      name: "Weather App Design",
      title: "UI/UX design",
      overview:
        "They Can Include Features Such As Location-Based Services And Access To Weather Data For Different Cities or Regions. Visual Representations Such As Graphs Depicting Weather Data Such As Temperature, Humidity, Wind Speed, And Other Relevant Information Are Commonly Used In Presenting Weather Forecasts. Es. ",
      view: "All View",
      link: "https://www.behance.net/gallery/186019981/Weather-Mobile-App-Design",
    },
    {
      photo: `${Khuran}`,
      name: "Quran Reading Website",
      title: "UI/UX design",
      overview:
        "A Quran Reading Website Provides A Platform For Users To Read And Learn The Quran Online. It Typically Includes Various Features Such As Different Translations, Interpretations (Tafsirs), And Audio Recitations Of The Quran. Es.",
      view: "All View",
      link: "https://www.behance.net/gallery/183134979/Quran-Reading-Landing-Page",
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
