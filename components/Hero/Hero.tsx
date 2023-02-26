import React from 'react';
import styles from '../../styles/Hero/Hero.module.css';

const Hero: React.FC = ({fonts}:any) => {
    const vid =
    "https://www.dropbox.com/s/nsxdztjr3dxc1xs/sui-vid%20copy.mp4?raw=1";

  return (
    <section className={styles.hero}>
        <video autoPlay loop muted className="hero-video" playsInline>
        <source src={vid} type="video/mp4" />
      </video>
      <h5>Welcome</h5>
      <h1 className={fonts.className}>SUI Wine Imports <span>Limited.</span></h1>
      <div className="btn-contain">
        <button>Learn More</button>
        <button>Member Sign In</button>
      </div>
    </section>
  );
};

export default Hero;
