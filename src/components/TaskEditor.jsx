import React from "react";
import { SiVisualstudiocode } from "react-icons/si";
import "../css/taskEditor.css";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import { useState } from "react";
import ModalCodeBoard from "./ModalCodeBoard";

function TaskEditor({ code, setCode, status }) {
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
      {status === 2 && (
        <SiVisualstudiocode
          color="white"
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
