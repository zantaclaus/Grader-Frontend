import React from "react";
import "../css/filterBox.css";
import { FaCaretDown } from "react-icons/fa";
import { showDropdown, linkAction } from "../services/dropdownService";

function FilterBox(props) {
  const dropDownClick = () => {
    showDropdown("dropdown");
  };

  return (
    <div className="filterBox">
      <div id="dropdown" className="dropdown">
        <div className="dropdown-select" onClick={dropDownClick}>
          <span className="select">All Units</span>
          <FaCaretDown />
        </div>
        <div className="dropdown-list">
          <div className="dropdown-list__item" onClick={linkAction}>
            All Units
          </div>
          <div className="dropdown-list__item" onClick={linkAction}>
            Condition
          </div>
          <div className="dropdown-list__item" onClick={linkAction}>
            Loop
          </div>
          <div className="dropdown-list__item" onClick={linkAction}>
            Array
          </div>
          <div className="dropdown-list__item" onClick={linkAction}>
            String
          </div>
          <div className="dropdown-list__item" onClick={linkAction}>
            Pattern
          </div>
          <div className="dropdown-list__item" onClick={linkAction}>
            God Mode
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
