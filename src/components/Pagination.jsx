import React from "react";
import "../css/pagination.css";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

function Pagination(props) {
  return (
    <div className="pagination__container">
      <IoMdArrowDropleftCircle
        size="3.8rem"
        color="white"
        className="arrow arrow__left"
      />
      <IoMdArrowDroprightCircle
        size="3.8rem"
        color="white"
        className="arrow arrow__right"
      />
    </div>
  );
}

export default Pagination;
