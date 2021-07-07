import React from "react";
import team1 from "../images/team1.webp";
import team2 from "../images/team2.webp";
import team3 from "../images/team3.webp";
import team4 from "../images/team4.webp";
import team5 from "../images/team5.webp";
import admin from "../images/admin.webp";

function ProfileGroup({ userDetail }) {
  return (
    <React.Fragment>
      {userDetail.group === 0 && <img src={team1} alt="" />}
      {userDetail.group === 1 && <img src={team2} alt="" />}
      {userDetail.group === 2 && <img src={team3} alt="" />}
      {userDetail.group === 3 && <img src={team4} alt="" />}
      {userDetail.group === 4 && <img src={team5} alt="" />}
      {userDetail.group === 5 && <img src={admin} alt="" />}
    </React.Fragment>
  );
}

export default ProfileGroup;
