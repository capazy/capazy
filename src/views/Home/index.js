import React from "react";
import Header from "./components/Header";
import Why from "./components/Why";
import CallToAction from "./components/CallToAction";
import Categories from "./components/Categories";
import How from "./components/How";
const Home = () => {
  return (
    <div>
      <Header />
      <How />
      <Why />
      <CallToAction />
      <Categories />
    </div>
  );
};

export default Home;
