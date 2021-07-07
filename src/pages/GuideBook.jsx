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
        tagline=" Lorem ipsum dolor sit amet consectetur dolorum!"
        lists={bannedLibrary}
      />
      <Banned
        title="Banned Function"
        tagline=" Lorem ipsum dolor sit amet consectetur dolorum!"
        lists={bannedFunction}
      />
    </div>
  );
}

export default GuideBook;
