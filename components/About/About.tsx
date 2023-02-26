import React from "react";
import styles from "../../styles/About/About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2>Introduction</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nibh eu felis ultricies suscipit. Nulla facilisi.</p>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </div>
        <div className={styles.mission}>
          <h2>Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nibh eu felis ultricies suscipit. Nulla facilisi.</p>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </div>
        <div className={styles.services}>
          <h2>Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nibh eu felis ultricies suscipit. Nulla facilisi.</p>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </div>
      </div>
    </section>
  );
};

export default About;
