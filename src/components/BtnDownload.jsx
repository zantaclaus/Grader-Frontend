import React from "react";
import "../css/btnDownload.css";
import { AiOutlineLink } from "react-icons/ai";

function BtnDownload({ linkPDF }) {
  return (
    <a href={linkPDF} target="_blank" rel="noreferrer">
      <div className="download__btn">
        <label htmlFor="" className="file__label">
          <AiOutlineLink size="2.3rem" className="download__logo" />
          Link PDF
        </label>
      </div>
    </a>
  );
}

export default BtnDownload;
