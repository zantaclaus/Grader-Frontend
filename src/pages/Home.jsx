import React from "react";
import Hero from "../components/Hero";
import Bubbles from "../components/Bubbles";
import LeaderBoard from "../components/LeaderBoard";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";
import ScoreBoard from "../components/ScoreBoard";

function Home(props) {
  const swap = useSelector((state) => state.swap);

  return (
    <React.Fragment>
      <Bubbles />
      <Hero />
      {!swap && <LeaderBoard />}
      {swap && <Contact />}
      <ScoreBoard />
    </React.Fragment>
  );
}

export default Home;
