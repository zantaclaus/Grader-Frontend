import React from "react";
import "../css/taskEditor.css";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";

function TaskEditor({ code, setCode }) {
  return (
    <div className="editor__container">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.c, "c")}
        padding={10}
        className="editor"
      />
    </div>
  );
}

export default TaskEditor;
