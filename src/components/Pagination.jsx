import React from "react";
import "../css/pagination.css";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { pageIncrement, pageDecrement } from "../redux/actions/pageAction";

function Pagination({ lastPage }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.page);

  return (
    <div className="pagination__container">
      {currentPage !== 1 ? (
        <IoMdArrowDropleftCircle
          size="3.8rem"
          color="white"
          className="arrow arrow__left"
          onClick={() => dispatch(pageDecrement())}
        />
      ) : null}
      {currentPage !== lastPage ? (
        <IoMdArrowDroprightCircle
          size="3.8rem"
          color="white"
          className="arrow arrow__right"
          onClick={() => dispatch(pageIncrement())}
        />
      ) : null}
    </div>
  );
}

export default Pagination;
