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
    console.log("Task is: ", task);
  }, [dispatch, user.id, id]);

  return (
    <div className="task__container">
      <div className="pdf__container">
        <div className="chaya">{task.chaya}</div>
        <div className="title">{task.title}</div>
        <div className="question">{task.question}</div>
        <div className="pattern">
          <div className="label">รูปเเบบการรับข้อมูล</div>
          <div className="pattern">
            <div className="pattern__label">Input</div>
            <div className="pattern__detail">{task.q_input}</div>
          </div>
          <div className="pattern">
            <div className="pattern__label">Output</div>
            <div className="pattern__detail">{task.q_output}</div>
          </div>
        </div>
        <div className="testcase">
          <div className="label">ตัวอย่าง</div>
          <div className="testcase__table">
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Test case 1</th>
                </tr>
                <tr>
                  <th>input</th>
                  <th>output</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{task.str_input_1}</td>
                  <td>{task.str_output_1}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Test case 2</th>
                </tr>
                <tr>
                  <th>input</th>
                  <th>output</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{task.str_input_2}</td>
                  <td>{task.str_output_2}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Test case 3</th>
                </tr>
                <tr>
                  <th>input</th>
                  <th>output</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{task.str_input_3}</td>
                  <td>{task.str_output_3}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="detail"></div>
      </div>
      <div className="editor__container"></div>
    </div>
  );
}

export default Task;
