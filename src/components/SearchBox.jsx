import React from "react";
import "../css/searchBox.css";
import { BiSearchAlt } from "react-icons/bi";

function SearchBox({ value, onChange }) {
  return (
    <div className="searchBox__container">
      <input
        className="searchBox"
        type="text"
        placeholder="Search name"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <span className="search__line"></span>
      <BiSearchAlt className="search__logo" size="2.5rem" />
    </div>
  );
}

export default SearchBox;
