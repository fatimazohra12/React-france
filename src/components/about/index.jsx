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
                eyebrow="À propos de nous"
                title="Qui sommes-nous ?"
              >
                Chez Valmetaux, nous sommes passionnés par la valorisation des déchets métalliques et engagés dans une économie circulaire durable. Depuis [année de création], nous transformons les métaux usagés en ressources précieuses, réduisant ainsi l’impact environnemental tout en offrant des solutions économiques à nos partenaires.
              </SectionTitle>
              <div className="about-content-body wow fadeInUp" data-wow-delay="0.5s">
                <ul>
                  <li>Achat et vente de métaux (fer, aluminium, acier, etc.)</li>
                  <li>Collecte et recyclage pour les particuliers et professionnels</li>
                  <li> Valorisation des déchets avec des méthodes écoresponsables</li>
                </ul>
              </div>
              <div className="about-content-footer wow fadeInUp" data-wow-delay="0.75s">
                <div className="about-footer-btn">
                  <a className="btn-default" href="#contact">
                  Obtenir un devis gratuit
                  </a>
                </div>
                <div className="about-contact-support">
                  <div className="icon-box">
                    <img src={asset("icon-phone.svg")} alt="" />
                  </div>
                  <div className="about-support-content">
                    <p>
                Appeler Valmétaux dés maintenant
                    </p>
                    <div className="about-phone-list">
                      <h3>
                        <span aria-label="France" role="img">🇫🇷</span>
                        +33 1 41 40 01 01
                      </h3>
                      <h3>
                        <span aria-label="Maroc" role="img">🇲🇦</span>
                        +212 6 07561496
                      </h3>
                    </div>
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
