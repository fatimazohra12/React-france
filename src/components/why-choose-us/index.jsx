import React from "react";
import { reasons } from "../../data/landingPage";
import { SectionTitle } from "../section-title";
import { asset } from "../../utils/assets";
import "./why-choose-us.css";

export function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="why-choose">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle eyebrow="why choose us?" title="Why we're your best choice">
              Developed in close collaboration with our partners and clients,
              combines industry knowledge, decades of experience, ingenuity and
              adaptability to deliver excellence to our clients.
            </SectionTitle>
          </div>
        </div>
        <div className="row">
          {reasons.map((reason) => (
            <React.Fragment key={reason.title}>
              <div className="col-lg-4 col-md-6">
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                  <div className="icon-box">
                    <img src={asset(reason.icon)} alt="" />
                  </div>
                  <div className="why-choose-content">
                    <h3>{reason.title}</h3>
                    <p>
                      Simple actions make a difference. It starts and ends with
                      each employee striving to work safer every single day so
                      they can return.
                    </p>
                  </div>
                  <div className="why-choose-counter">
                    <h3>
                      <span className="counter">800</span>+
                    </h3>
                    <p>project complated</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="why-choose-image">
                  <figure className="image-anime reveal">
                    <img src={asset(reason.image)} alt="" />
                  </figure>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
