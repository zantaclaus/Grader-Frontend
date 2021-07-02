import React from "react";
import Hero from "../components/Hero";
import Bubbles from "../components/Bubbles";
// import TeamScore from "../components/TeamScore";
import LeaderBoard from "../components/LeaderBoard";
// import Tool from "../components/Tool";

function Home(props) {
  return (
    <React.Fragment>
      <Bubbles />
      <Hero />
      {/* <TeamScore /> */}
      <LeaderBoard />
      {/* <Tool /> */}
    </React.Fragment>
  );
}

export default Home;
