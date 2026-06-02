import React from "react";
import "./section-title.css";

export function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      {eyebrow && <h3 className="wow fadeInUp">{eyebrow}</h3>}
      <h2 className="text-anime-style-3" data-cursor="-opaque">
        {title}
      </h2>
      {children && (
        <p className="wow fadeInUp" data-wow-delay="0.25s">
          {children}
        </p>
      )}
    </div>
  );
}
