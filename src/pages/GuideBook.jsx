import React from "react";
import Banned from "../components/Banned";
import PossibleResult from "../components/PossibleResult";
import Bubbles from "../components/Bubbles";
import { getBannedFunction } from "../services/bannedFunctionService";
import { getBannedLibrary } from "../services/bannedLibrary";
import "../css/guidebook.css";

function GuideBook(props) {
  const bannedFunction = getBannedFunction();
  const bannedLibrary = getBannedLibrary();
  return (
    <div className="guide__page">
      <Bubbles />
      <PossibleResult />
      <Banned
        title="Banned Library"
        tagline="Libraries that you can't use in your code even if it's commented."
        lists={bannedLibrary}
      />
      <Banned
        title="Banned Function"
        tagline="Functions that couldn't be called in your code."
        lists={bannedFunction}
      />
    </div>
  );
}

export default GuideBook;
