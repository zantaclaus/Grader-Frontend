import React from "react";
import Hero from "../components/Hero";
import TeamScore from "../components/TeamScore";
// import LeaderBoard from "../components/LeaderBoard";
// import Tool from "../components/Tool";

function Home(props) {
  return (
    <React.Fragment>
      <Hero />
      <TeamScore />
      {/* <LeaderBoard /> */}
      {/* <Tool /> */}
    </React.Fragment>
  );
}

export default Home;
