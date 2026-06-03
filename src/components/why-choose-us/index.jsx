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
            <SectionTitle eyebrow="Pourquoi nous choisir ?" title="Pourquoi Valmetaux est votre meilleur choix ?">
            Développé en étroite collaboration avec nos partenaires et clients, notre approche combine expertise sectorielle, décennies d’expérience et adaptabilité pour offrir des solutions optimales à vos besoins en métaux.
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
                    <p className="why-choose-subtitle">{reason.subtitle}</p>
                    <ul>
                      {reason.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
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
