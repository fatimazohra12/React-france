import React from "react";
import "./stars.css";

export function Stars() {
  return (
    <div className="testimonial-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <i className="fa-solid fa-star" key={star} />
      ))}
    </div>
  );
}
