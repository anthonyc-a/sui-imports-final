import React from "react";
import styles from "../../styles/About/About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={`${styles.section} ${styles.intro}`}>
          <h2>Introduction</h2>

          <p>Our goal is to allow a different culture to try new
exciting tastes within the oenology
community and create strong links
between suppliers and customers in
order to prioritize fast and efficient
transactions/ deliveries.
Our goal is to satisfy a different
community with quality wines and
express the Swiss passion for
winemaking across the United
Kingdom.</p>
        </div>
        <div className={`${styles.section} ${styles.mission}`}>
          <h2>Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nibh eu felis ultricies suscipit. Nulla facilisi.</p>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </div>
        <div className={`${styles.section} ${styles.services}`}>
          <h2>Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nibh eu felis ultricies suscipit. Nulla facilisi.</p>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </div>
      </div>
    </section>
  );
};

export default About;

