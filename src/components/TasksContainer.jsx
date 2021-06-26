import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Aos from "aos";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";
import Card from "./Card";
import { RiMoonClearFill } from "react-icons/ri";
import "../css/tasksContainer.css";
import Pagination from "./Pagination";

function TasksContainer(props) {
  const tasks = useSelector((state) => state.allTasks.tasks);
  const selectedUnit = useSelector((state) => state.selectedUnit);

  let filtered = tasks;
  if (selectedUnit !== "All Units") {
    filtered = filtered.filter((u) => u.unit.trim() === selectedUnit);
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div data-aos="zoom-in" className="tasks__container">
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
            {filtered.map((task) => (
              <Card key={task._id} task={task} titleColor="card__task" />
            ))}
          </div>
        </div>
        <div className="tasks__bar tasks__footer">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default TasksContainer;
