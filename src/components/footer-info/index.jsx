import React from "react";
import { asset } from "../../utils/assets";
import "./footer-info.css";

export function FooterInfo({ icon, children }) {
  return (
    <div className="footer-info-box">
      <div className="icon-box">
        <img src={asset(icon)} alt="" />
      </div>
      <p>{children}</p>
    </div>
  );
}
