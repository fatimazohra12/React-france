import React from "react";
import { faqs } from "../../data/landingPage";
import { SectionTitle } from "../section-title";
import { asset } from "../../utils/assets";
import "./faqs.css";

export function Faqs() {
  return (
    <section className="our-faqs" id="faqs">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle eyebrow="FAQ chez Valmétaux" title="Foire aux questions">
              Retrouvez les réponses simples aux questions les plus fréquentes
              sur nos services de valorisation des métaux.
            </SectionTitle>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="our-faqs-images">
              <div className="row align-items-end">
                {["service-recuperation-metaux.png", "service-recyclage-metaux.png"].map((image, index) => (
                  <div className="col-md-6 col-6" key={image}>
                    <div className={`faqs-img-${index + 1}`}>
                      <figure className="image-anime reveal">
                        <img src={asset(image)} alt="" />
                      </figure>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row align-items-start">
                {["prestation-cuivre.png", "prestation-batteries.png"].map((image, index) => (
                  <div className="col-md-6 col-6" key={image}>
                    <div className={`faqs-img-${index + 1}`}>
                      <figure className="image-anime reveal">
                        <img src={asset(image)} alt="" />
                      </figure>
                    </div>
                  </div>
                ))}
              </div>
              <div className="our-faqs-bulitup">
                <img src={asset("icon-faq-bulitup.svg")} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="faq-accordion" id="accordion">
              {faqs.map((faq) => (
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay={faq.delay}
                  key={faq.collapseId}
                >
                  <h2 className="accordion-header" id={faq.headingId}>
                    <button
                      aria-controls={faq.collapseId}
                      aria-expanded={faq.isOpen ? "true" : "false"}
                      className={`accordion-button${faq.isOpen ? "" : " collapsed"}`}
                      data-bs-target={`#${faq.collapseId}`}
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    aria-labelledby={faq.headingId}
                    className={`accordion-collapse collapse${faq.isOpen ? " show" : ""}`}
                    data-bs-parent="#accordion"
                    id={faq.collapseId}
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
