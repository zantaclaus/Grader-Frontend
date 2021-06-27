import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/actions/taskAction";
import TasksContainer from "../components/TasksContainer";
import "../css/tasks.css";

function Tasks(props) {
  const user = useSelector((state) => state.user.user);
  const { id: userId } = user;
  const tasks = useSelector((state) => state.allTasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks(userId));
  }, [dispatch, userId]);

  return (
    <div className="tasks__background">
      {Object.keys(tasks).length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <TasksContainer />
      )}
    </div>
  );
}

export default Tasks;
