import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Inspiration from "./components/Inspiration";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Benefits></Benefits>
      <Inspiration></Inspiration>
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
};

export default App;
