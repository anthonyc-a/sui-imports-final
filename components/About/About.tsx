import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis
          volutpat mi sed placerat. Nam tempor justo et ipsum faucibus, non
          pulvinar lorem porttitor. Sed quis est eget arcu viverra maximus
          suscipit in eros.
        </p>
      </div>
      <div className="about-image">
        <Image
          src="https://via.placeholder.com/600x400"
          alt="About Us"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default About;
