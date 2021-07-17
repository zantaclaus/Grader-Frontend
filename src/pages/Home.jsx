import React from "react";
import Hero from "../components/Hero";
import Bubbles from "../components/Bubbles";
import LeaderBoard from "../components/LeaderBoard";
import Contact from "../components/Contact";
// import ScoreBoard from "../components/ScoreBoard";

function Home(props) {
  return (
    <React.Fragment>
      <Bubbles />
      <Hero />
      <LeaderBoard />
      <Contact />
      {/* <ScoreBoard /> */}
    </React.Fragment>
  );
}

export default Home;
