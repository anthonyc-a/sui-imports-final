import React from "react";
import Heading from "../components/common/Heading/Heading";
import Layout from "../components/Layout/Layout";
import VinesOne from "../components/common/Illustrations/VinesOne";
import VinesTwo from "../components/common/Illustrations/VinesTwo";

const App = () => {

  return (
    <div className="container">
      <Layout title="Home">
        <h1>Welcome</h1>
        <h2>An Underlined Heading</h2>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsum quas labore, odio sequi, harum, itaque numquam mollitia vel magni quasi reiciendis. Doloremque aut repellat earum nostrum quae, corrupti nihil.</p>
        <Heading text="This is a Heading" />
        <button>Learn More</button>
      </Layout>
      <VinesTwo/>
    </div>
  );
};

export default App;
