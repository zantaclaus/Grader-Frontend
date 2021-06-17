import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/actions/taskAction";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";
import Card from "./Card";
import { RiMoonClearFill } from "react-icons/ri";
import "../css/tasksContainer.css";

function TasksContainer(props) {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchTasks = async () => {
    const response = await axios
      .get(
        "http://localhost:5000/api/all-questions?id=60c76bb43b3b05150093c9d8"
      )
      .catch((error) => {
        console.log(error);
      });
    dispatch(setTasks(response.data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  console.log(tasks);
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
