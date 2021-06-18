import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTasks } from "../redux/actions/taskAction";
import TasksContainer from "../components/TasksContainer";
import "../css/tasks.css";

function Tasks(props) {
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
      <TasksContainer />
    </div>
  );
}

export default Tasks;
