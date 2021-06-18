import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedTasks } from "../redux/actions/taskAction";

function Task(props) {
  const task = useSelector((state) => state.task);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios
        .get(`http://localhost:5000/api/question-id/userId/${id}`)
        .catch((error) => console.log("Error", error));

      dispatch(selectedTasks(response.data[0]));
    };
    fetchTask();
  }, [dispatch, id]);

  return <div></div>;
}

export default Task;
