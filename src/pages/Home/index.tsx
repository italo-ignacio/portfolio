import React from "react";
import About from "../../components/About";
import Header from "../../components/Header/index";
import Personal from "../../components/Personal";
import University from "../../components/University";
import UpButton from "../../components/UpButton";
import Works from "../../components/Works";

const Home = () => {
  return (
    <>
      <Header project={false} />
      <About />
      <Works />
      <Personal />
      <University />
    </>
  );
};

export default Home;
