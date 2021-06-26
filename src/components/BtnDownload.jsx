import React from "react";
import "../css/btnDownload.css";
import { RiDownload2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function BtnDownload({ linkPDF }) {
  return (
    <Link to={linkPDF} target="_blank" download>
      <div className="download__btn">
        <label htmlFor="" className="file__label">
          <RiDownload2Fill size="2.3rem" className="download__logo" />
          Download
        </label>
      </div>
    </Link>
  );
}

export default BtnDownload;
