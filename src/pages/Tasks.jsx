import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/actions/taskAction";
import TasksContainer from "../components/TasksContainer";
import Loading from "../components/Loading";
import "../css/tasks.css";
import { setCode } from "../redux/actions/codeAction";

function Tasks(props) {
  const user = useSelector((state) => state.user.user);
  const { id: userId } = user;
  const tasks = useSelector((state) => state.allTasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(setCode(""));
      dispatch(fetchTasks(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="tasks__background">
      {Object.keys(tasks).length === 0 ? <Loading /> : <TasksContainer />}
    </div>
  );
}

export default Tasks;
