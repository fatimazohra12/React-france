import React from "react";
import { SectionTitle } from "../section-title";
import { asset } from "../../utils/assets";
import "./about.css";

export function About() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-image">
              <div className="about-img">
                <figure className="reveal">
                  <img src={asset("about-us-img.png")} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <SectionTitle
                eyebrow="about us"
                title="Crafting structures that last a lifetime"
              >
                Crafting structures that last a lifetime requires a holistic
                approach that integrates advanced materials, resilient design,
                regular maintenance, and sustainability practices. By learning
                from historical examples and leveraging modern technology.
              </SectionTitle>
              <div className="about-content-body wow fadeInUp" data-wow-delay="0.5s">
                <ul>
                  <li>Comprehensive Services</li>
                  <li>Advanced Technology</li>
                  <li>Transparent Communication</li>
                </ul>
              </div>
              <div className="about-content-footer wow fadeInUp" data-wow-delay="0.75s">
                <div className="about-footer-btn">
                  <a className="btn-default" href="#contact">
                    get free quote
                  </a>
                </div>
                <div className="about-contact-support">
                  <div className="icon-box">
                    <img src={asset("icon-phone.svg")} alt="" />
                  </div>
                  <div className="about-support-content">
                    <p>call support center 24X7</p>
                    <h3>+1 809 120 6705</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
