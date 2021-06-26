import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";
import Card from "./Card";
import { RiMoonClearFill } from "react-icons/ri";
import "../css/tasksContainer.css";
import Pagination from "./Pagination";
import { paginate } from "../services/paginateService";
import { setTitle } from "../redux/actions/dropdownAction";
import { setPage } from "../redux/actions/pageAction";

function TasksContainer(props) {
  const tasks = useSelector((state) => state.allTasks.tasks);
  const selectedUnit = useSelector((state) => state.selectedUnit);
  const currentPage = useSelector((state) => state.page);
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 20;
  const dispatch = useDispatch();

  let filtered = tasks;
  if (searchQuery) {
    filtered = tasks.filter((task) =>
      task.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  } else if (selectedUnit !== "All Units") {
    filtered = tasks.filter((u) => u.unit.trim() === selectedUnit);
  }

  const sliceProblems = paginate(filtered, currentPage, pageSize);
  const lastPage = Math.ceil(filtered.length / pageSize);

  const handleSearch = (query) => {
    dispatch(setPage(1));
    dispatch(setTitle("All Units"));
    setSearchQuery(query);
  };

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
            <SearchBox value={searchQuery} onChange={handleSearch} />
          </div>
          <span className="line" />
          <div className="tasks__filter">
            <FilterBox setSearchQuery={setSearchQuery} />
          </div>
        </div>
        <div className="tasks__content" id="tasks__content">
          <div className="tasks__content__container">
            {sliceProblems.map((task) => (
              <Card key={task._id} task={task} titleColor="card__task" />
            ))}
          </div>
        </div>
        <div className="tasks__bar tasks__footer">
          <Pagination lastPage={lastPage} />
        </div>
      </div>
    </div>
  );
}

export default TasksContainer;
