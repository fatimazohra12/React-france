import React from "react";
import { asset } from "../../utils/assets";
import "./card-image.css";

export function CardImage({ image, type }) {
  return (
    <div className={`${type}-image`}>
      <a href="#home">
        <figure>
          <img src={asset(image)} alt="" />
        </figure>
      </a>
    </div>
  );
}
