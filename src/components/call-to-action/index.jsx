import React from "react";
import { asset } from "../../utils/assets";
import "./call-to-action.css";

export function CallToAction() {
  return (
    <section className="cta-box" id="quote">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-8">
            <div className="section-title">
              <h2 className="text-anime-style-3" data-cursor="-opaque">
              Faites de vos métaux une opportunité durable !
              </h2>
              <p className="wow fadeInUp">
              Ne laissez plus vos métaux inutilisés prendre la poussière. Valmetaux vous accompagne dans leur valorisation avec des solutions sur mesure, économiques et écoresponsables.
              </p>
            </div>
            <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
              <a className="btn-default btn-large" href="#contact">
              Obtenir un devis gratuit
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-4">
            <div className="cta-box-image">
              <figure>
                <img src={asset("cta-box-img.png")} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
