import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Bubbles from "../components/Bubbles";
import LeaderBoard from "../components/LeaderBoard";
// import ScoreBoard from "../components/ScoreBoard";

function Home(props) {
  return (
    <React.Fragment>
      <Bubbles />
      <Hero />
      <LeaderBoard />
      {/* <ScoreBoard data={scoreBoard} /> */}
    </React.Fragment>
  );
}

export default Home;
