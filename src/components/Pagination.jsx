import React from "react";
import "../css/pagination.css";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { pageIncrement, pageDecrement } from "../redux/actions/pageAction";

function Pagination({ lastPage }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.page);

  const scrollToTop = () => {
    document.getElementById("tasks__content").scroll(0, 0);
  };

  const pageDecrease = () => {
    scrollToTop();
    dispatch(pageDecrement());
  };

  const pageIncrease = () => {
    scrollToTop();
    dispatch(pageIncrement());
  };

  return lastPage === 0 ? null : (
    <div className="pagination__container">
      {currentPage !== 1 ? (
        <IoMdArrowDropleftCircle
          size="3.8rem"
          className="arrow arrow__left"
          onClick={pageDecrease}
        />
      ) : null}
      {currentPage !== lastPage ? (
        <IoMdArrowDroprightCircle
          size="3.8rem"
          className="arrow arrow__right"
          onClick={pageIncrease}
        />
      ) : null}
    </div>
  );
}

export default Pagination;
