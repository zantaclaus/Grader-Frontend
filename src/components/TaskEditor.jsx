import React from "react";
import { BsFileEarmarkCode } from "react-icons/bs";
import "../css/taskEditor.css";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import { useState, useEffect } from "react";
import ModalCodeBoard from "./ModalCodeBoard";
import { useSelector } from "react-redux";

function TaskEditor({ code, setCode, status }) {
  const userDetail = useSelector((state) => state.userDetail.user);

  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (userDetail) setIsUser(true);
  }, []);

  const [modalCode, setModalCode] = useState(false);
  const toggleModalCode = () => {
    setModalCode(!modalCode);
  };

  return (
    <div className="editor__container scrollbar-hidden">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.c, "c")}
        padding={10}
        className="editor"
      />
      {!isUser && (
        <BsFileEarmarkCode
          size="3rem"
          className="code__icon"
          onClick={toggleModalCode}
        />
      )}
      {isUser && (status === 2 || userDetail.group === 6) && (
        <BsFileEarmarkCode
          size="3rem"
          className="code__icon"
          onClick={toggleModalCode}
        />
      )}
      <ModalCodeBoard modal={modalCode} toggleModal={toggleModalCode} />
    </div>
  );
}

export default TaskEditor;
