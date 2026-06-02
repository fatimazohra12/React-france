import React from "react";
import { asset } from "../../utils/assets";
import "./hero.css";

export function Hero() {
  return (
    <section className="hero bg-section hero-video" id="home">
      <div className="hero-bg-video">
        <video autoPlay id="myVideo" loop muted playsInline>
          <source src={asset("hero-bg-video.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="hero-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">welcome to builtup</h3>
                <h1 className="text-anime-style-3" data-cursor="-opaque">
                  Building dreams with precision and excellence
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  we specialize in turning visions into reality with exceptional
                  craftsmanship and meticulous attention to detail. With years
                  of experience and a commitment to quality.
                </p>
              </div>
              <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                <a className="btn-default" href="#about">
                  get started
                </a>
                <a className="btn-default btn-highlighted" href="#projects">
                  view Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
