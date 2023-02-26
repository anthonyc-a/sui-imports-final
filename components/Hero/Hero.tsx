import React from 'react';
import styles from '../../styles/Hero/Hero.module.css';

const Hero: React.FC = () => {
    const vid =
    "https://www.dropbox.com/s/nsxdztjr3dxc1xs/sui-vid%20copy.mp4?raw=1";

  return (
    <section className={styles.hero}>
        <video autoPlay loop muted className="hero-video" playsInline>
        <source src={vid} type="video/mp4" />
      </video>
      <h1>SUI Wine Imports</h1>
    </section>
  );
};

export default Hero;
