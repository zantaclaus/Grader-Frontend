import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";
import Card from "./Card";
// import { RiMoonClearFill } from "react-icons/ri";
// import { BsListTask } from "react-icons/bs";
import { BiTaskX } from "react-icons/bi";
// import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
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
  const [isFinishedFilter, setIsFinishedFilter] = useState(false);
  const pageSize = 20;
  const dispatch = useDispatch();

  let filtered = tasks.filter((task) => task.number !== 257);
  if (searchQuery) {
    const queryNumber = filtered.filter((task) =>
      task.number.toString().startsWith(searchQuery)
    );
    const queryInclude = filtered.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    filtered = queryNumber.concat(queryInclude);
    filtered = [...new Set([...queryNumber, ...queryInclude])];
  } else if (selectedUnit !== "All Units") {
    filtered = filtered.filter((u) => u.unit.trim() === selectedUnit);
  }
  if (isFinishedFilter) {
    filtered = filtered.filter((task) => task.status !== 2);
  }

  const sliceProblems = paginate(filtered, currentPage, pageSize);
  const lastPage = Math.ceil(filtered.length / pageSize);

  const handleSearch = (query) => {
    dispatch(setPage(1));
    dispatch(setTitle("All Units"));
    setSearchQuery(query);
  };

  const handleFinished = () => {
    setIsFinishedFilter(!isFinishedFilter);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div data-aos="zoom-in" className="tasks__container">
        <div className="tasks__bar tasks__header">
          <div className="tasks__header">
            <div className="tasks__logo">
              {isFinishedFilter && (
                <BiTaskX
                  className="logo logoX"
                  size="3rem"
                  onClick={handleFinished}
                />
              )}
              {!isFinishedFilter && (
                <FaTasks
                  className="logo logoTick"
                  size="3rem"
                  onClick={handleFinished}
                />
              )}
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
          <Pagination lastPage={lastPage} />
        </div>
        <div className="tasks__content" id="tasks__content">
          <div className="tasks__content__container">
            {sliceProblems.map((task) => (
              <Card key={task._id} task={task} titleColor="card__task" />
            ))}
          </div>
        </div>
        <div className="tasks__bar tasks__footer">
          {/* <Pagination lastPage={lastPage} /> */}
        </div>
      </div>
    </div>
  );
}

export default TasksContainer;
