import React from "react";
import "../css/pagination.css";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { pageIncrement, pageDecrement } from "../redux/actions/pageAction";

function Pagination(props) {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  return (
    <div className="pagination__container">
      <IoMdArrowDropleftCircle
        size="3.8rem"
        color="white"
        className="arrow arrow__left"
        onClick={() => dispatch(pageDecrement())}
      />
      <IoMdArrowDroprightCircle
        size="3.8rem"
        color="white"
        className="arrow arrow__right"
        onClick={() => dispatch(pageIncrement())}
      />
    </div>
  );
}

export default Pagination;
