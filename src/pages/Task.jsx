import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedTasks } from "../redux/actions/taskAction";
import "../css/task.css";

function Task(props) {
  const task = useSelector((state) => state.task);
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios
        .get(`http://localhost:5000/api/question-id/${user.id}/${id}`)
        .catch((error) => console.log("Error", error));

      dispatch(selectedTasks(response.data[0]));
    };
    fetchTask();
    console.log("user id", user);
  }, [dispatch, id]);

  return (
    <div className="task__container">
      <div className="pdf__container"></div>
      <div className="editor__container"></div>
    </div>
  );
}

export default Task;
