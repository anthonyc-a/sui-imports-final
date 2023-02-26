import React from 'react';
import styles from '../../styles/Hero/Hero.module.css';

import { useRouter } from 'next/router';

const lora = Lora({ subsets: ['latin'] })

import { Lora } from '@next/font/google'


const Hero: React.FC = () => {
    function changeAddressOnClick(newAddress:any) {
        const router = useRouter();
      
        const handleClick = () => {
          router.push(newAddress);
        }
      
        return (
          <button onClick={handleClick}>
            Learn More
          </button>
        );
      }
    const vid =
    "https://www.dropbox.com/s/nsxdztjr3dxc1xs/sui-vid%20copy.mp4?raw=1";

  return (
    <section className={styles.hero}>
        <video autoPlay loop muted className="hero-video" playsInline>
        <source src={vid} type="video/mp4" />
      </video>
      <h5>Welcome</h5>
      <h1 className={lora.className}>SUI Wine Imports <br /> <span>Limited.</span></h1>
      <div className={styles.btnContain}>
        {changeAddressOnClick("#about")}
        <button>Member Sign In <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.48419 10.7655C3.44927 10.7307 3.42156 10.6893 3.40266 10.6437C3.38375 10.5982 3.37402 10.5493 3.37402 10.5C3.37402 10.4507 3.38375 10.4018 3.40266 10.3563C3.42156 10.3107 3.44927 10.2693 3.48419 10.2345L7.71944 6L3.48419 1.7655C3.44933 1.73064 3.42167 1.68924 3.4028 1.64369C3.38393 1.59813 3.37422 1.54931 3.37422 1.5C3.37422 1.45069 3.38393 1.40187 3.4028 1.35631C3.42167 1.31076 3.44933 1.26937 3.48419 1.2345C3.51906 1.19964 3.56045 1.17198 3.60601 1.15311C3.65156 1.13424 3.70039 1.12453 3.74969 1.12453C3.799 1.12453 3.84783 1.13424 3.89338 1.15311C3.93894 1.17198 3.98033 1.19964 4.01519 1.2345L8.51519 5.7345C8.55012 5.76934 8.57782 5.81072 8.59673 5.85628C8.61563 5.90183 8.62536 5.95068 8.62536 6C8.62536 6.04933 8.61563 6.09817 8.59673 6.14373C8.57782 6.18928 8.55012 6.23067 8.51519 6.2655L4.01519 10.7655C3.98036 10.8004 3.93898 10.8281 3.89342 10.847C3.84786 10.8659 3.79902 10.8757 3.74969 10.8757C3.70037 10.8757 3.65153 10.8659 3.60597 10.847C3.56041 10.8281 3.51903 10.8004 3.48419 10.7655Z" fill="white"/>
</svg>
</button>
      </div>
      <div className={styles.scroller}><svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="32.3" width="31.8" height="19" rx="9.5" transform="rotate(-90 0.5 32.3)" stroke="#E2E2E2"/>
<line x1="9.90137" y1="23.5015" x2="9.90137" y2="16.5015" stroke="#E2E2E2" stroke-linecap="round"/>
</svg>
</div>
    </section>
  );
};

export default Hero;
