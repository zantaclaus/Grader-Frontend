import React from "react";
import "../css/tasksContainer.css";
import { RiMoonClearFill } from "react-icons/ri";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";
import Card from "./Card";

function TasksContainer(props) {
  return (
    <div>
      <div className="tasks__container">
        <div className="tasks__bar tasks__header">
          <div className="tasks__logo">
            <RiMoonClearFill className="logo" color="gold" size="3rem" />
          </div>
          <div className="tasks__title"></div>
          <span className="line" />
          <div className="tasks__search">
            <SearchBox />
          </div>
          <span className="line" />
          <div className="tasks__filter">
            <FilterBox />
          </div>
        </div>
        <div className="tasks__content">
          <div className="tasks__content__container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="tasks__bar tasks__footer"></div>
      </div>
    </div>
  );
}

export default TasksContainer;
