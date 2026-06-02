import React from "react";
import "./header.css";

export const Header = (props) => {
  return (
    <header id="header">
      <div
        className="intro"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/intro-bg.jpg)`,
        }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div className="intro-actions">
                  <a
                    href="#contact"
                    className="intro-action intro-action--contact page-scroll"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    Contactez-nous
                  </a>

                  <a href="tel:0974569212" className="intro-action intro-action--phone">
                    <i className="fa-solid fa-phone"></i>
                    09 74 56 92 12
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};