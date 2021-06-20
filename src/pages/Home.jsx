import React from "react";
import Hero from "../components/Hero";
import LeaderBoard from "../components/LeaderBoard";
// import Tool from "../components/Tool";

function Home(props) {
  return (
    <React.Fragment>
      <Hero />
      <LeaderBoard />
      {/* <Tool /> */}
    </React.Fragment>
  );
}

export default Home;
