import React, { useState } from "react";
import "../css/filterBox.css";
import { FaCaretDown } from "react-icons/fa";
import { getUnits } from "../services/unitService";
import { addToggle, delClass } from "../services/toggleService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../redux/actions/dropdownAction";
import { setPage } from "../redux/actions/pageAction";

function FilterBox(props) {
  const [units, setUnits] = useState([]);
  const dispatch = useDispatch();
  const title = useSelector((state) => state.selectedUnit);

  useEffect(() => {
    const units = [{ name: "All Units" }, ...getUnits()];
    setUnits(units);
    console.log(units);
  }, []);

  const dropDownClick = () => {
    addToggle("dropdown", "show-dropdown");
  };

  const linkClick = (title) => {
    delClass("dropdown", "show-dropdown");
    dispatch(setTitle(title));
    dispatch(setPage(1));
  };

  return (
    <div className="filterBox">
      <div id="dropdown" className="dropdown">
        <div className="dropdown-select" onClick={dropDownClick}>
          <span className="select">{title}</span>
          <FaCaretDown />
        </div>
        <div className="dropdown-list">
          {units.map((unit) => (
            <div
              key={unit.name}
              className="dropdown-list__item"
              onClick={() => linkClick(unit.name)}
            >
              {unit.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
