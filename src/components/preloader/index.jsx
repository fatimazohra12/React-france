import React from "react";
import { asset } from "../../utils/assets";
import "./preloader.css";

export function Preloader() {
  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading" />
        <div id="loading-icon">
          <img src={asset("loader.svg")} alt="" />
        </div>
      </div>
    </div>
  );
}
