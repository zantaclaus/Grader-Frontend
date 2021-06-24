import React from "react";
import "../css/filterBox.css";
import { FaCaretDown } from "react-icons/fa";
import { addToggle, delClass } from "../services/toggleService";

function FilterBox(props) {
  const dropDownClick = () => {
    addToggle("dropdown", "show-dropdown");
  };

  const linkClick = () => {
    delClass("dropdown", "show-dropdown");
  };

  return (
    <div className="filterBox">
      <div id="dropdown" className="dropdown">
        <div className="dropdown-select" onClick={dropDownClick}>
          <span className="select">All Units</span>
          <FaCaretDown />
        </div>
        <div className="dropdown-list">
          <div className="dropdown-list__item" onClick={linkClick}>
            All Units
          </div>
          <div className="dropdown-list__item" onClick={linkClick}>
            Condition
          </div>
          <div className="dropdown-list__item" onClick={linkClick}>
            Loop
          </div>
          <div className="dropdown-list__item" onClick={linkClick}>
            Array
          </div>
          <div className="dropdown-list__item" onClick={linkClick}>
            String
          </div>
          <div className="dropdown-list__item" onClick={linkClick}>
            Pattern
          </div>
          <div className="dropdown-list__item" onClick={linkClick}>
            God Mode
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
