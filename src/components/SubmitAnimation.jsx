import React from "react";
import Lottie from "react-lottie";
import * as shark from "../images/shark-2.json";
import * as done from "../images/done.json";
import "../css/submitAnimation.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: shark.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function SubmitAnimation(props) {
  return (
    <div className="submit__animation">
      <Lottie options={defaultOptions} height={400} width={400} />
      <h1>ประมวลผลing</h1>
    </div>
  );
}

export default SubmitAnimation;
