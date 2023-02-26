import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

const App = () => {
  return (
    <div className="landing-page">
      <Header links={[{text: "Home", url:"/"}, {text: "Portolio", url:"/portfolio"}]} />
      <Hero />
      <About />
    </div>
  );
};

export default App;
