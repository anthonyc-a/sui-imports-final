import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header links={[{text: "Home", url:"/"}]} />
      <Hero />
      <About />
    </div>
  );
};

export default LandingPage;
