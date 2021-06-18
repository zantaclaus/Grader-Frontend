import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/actions/taskAction";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";
import Card from "./Card";
import { RiMoonClearFill } from "react-icons/ri";
import "../css/tasksContainer.css";
// import { getTasks } from "../services/tasksService";
import axios from "axios";

function TasksContainer(props) {
  const user = useSelector((state) => state.user.user);
  const tasks = useSelector((state) => state.allTasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios
        .get(`http://localhost:5000/api/all-questions?id=${user.id}`)
        .catch((error) => {
          console.log(error);
        });
      dispatch(setTasks(response.data));
    };
    fetchTasks();
  }, [dispatch, user.id]);
  console.log("tasks user:", user);
  console.log("tast:", tasks);

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
            {tasks.map((task) => (
              <Card key={task._id} task={task} />
            ))}
          </div>
        </div>
        <div className="tasks__bar tasks__footer"></div>
      </div>
    </div>
  );
}

export default TasksContainer;
