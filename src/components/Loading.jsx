import React from "react";
import "../css/loading.css";
import RotateCircleLoading from "react-loadingg/lib/RotateCircleLoading";

function Loading(props) {
  return (
    <div className="loading__container">
      <RotateCircleLoading size="large" />;
    </div>
  );
}

export default Loading;
