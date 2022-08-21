import React from "react";
import About from "../../components/About";
import Header from "../../components/Header/index";
import Personal from "../../components/Personal";
import University from "../../components/University";
import Works from "../../components/Works";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Personal />
      <University />
      <Works />
    </>
  );
};

export default Home;
