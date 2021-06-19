import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedTasks } from "../redux/actions/taskAction";
import { AiFillFileAdd } from "react-icons/ai";

import "../css/task.css";

import Editor from "react-simple-code-editor";
import { useState } from "react";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";

function Task(props) {
  const [code, setCode] = useState(`#include<stdio.h>
int main() 
{
  printf("Hello World");
  return 0;
}`);
  const task = useSelector((state) => state.task);
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.readAsText(file);
    render.onload = () => {
      setCode(render.result);
    };
  };

  const onInputClick = (event) => {
    event.target.value = ""; // Clear File
  };

  const handleCodeSubmit = async () => {
    const { id: userid } = user;
    // const submitted = await axios.post("http://localhost:5000/api/fetch-sub", {
    //   code,
    //   userid,
    //   id,
    // });
  };

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios
        .get(`http://localhost:5000/api/question-id/${user.id}/${id}`)
        .catch((error) => console.log("Error", error));

      dispatch(selectedTasks(response.data[0]));
    };
    fetchTask();
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
        <div className="detail">
          <div className="label">เพิ่มเติม</div>
          <div className="question">{task.detail}</div>
        </div>
      </div>
      <div className="editor__container">
        <div className="task__btn">
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            onClick={onInputClick}
            accept=".c, .cpp"
          />
          <label htmlFor="file" className="file__label">
            <AiFillFileAdd size="2rem" className="file__icon" />
            Upload File
          </label>
        </div>
        <div className="task__editor">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.c, "c")}
            padding={10}
            className="editor"
          />
        </div>
        <div className="task__submit">
          <button onClick={handleCodeSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Task;
