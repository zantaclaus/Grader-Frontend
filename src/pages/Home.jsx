import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Bubbles from "../components/Bubbles";
import LeaderBoard from "../components/LeaderBoard";
import Contact from "../components/Contact";
import { useDispatch, useSelector } from "react-redux";
import ScoreBoard from "../components/ScoreBoard";
import { fetchUserDetail } from "../redux/actions/userAction";

function Home(props) {
  const user = useSelector((state) => state.user.user);
  const swap = useSelector((state) => state.swap);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) {
      dispatch(fetchUserDetail(user.id));
    }
  }, [dispatch, user]);

  return (
    <React.Fragment>
      <Bubbles />
      <Hero />
      {!swap && <LeaderBoard />}
      {swap && <Contact />}
      <ScoreBoard />
      <Contact />
    </React.Fragment>
  );
}

export default Home;
