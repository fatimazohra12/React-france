import React from "react";
import { CardImage } from "../card-image";
import { services } from "../../data/landingPage";
import { SectionTitle } from "../section-title";
import "./services.css";

export function Services() {
  return (
    <section className="our-service" id="services">
      <div className="light-bg-section">
        <div className="container-fluid">
          <div className="row section-row">
            <div className="col-lg-12">
              <SectionTitle eyebrow="Nos services" title="Nos prestations de construction">
              Chez Valmetaux, nous proposons une gamme complète de services de construction pour répondre à tous vos besoins, des projets résidentiels aux infrastructures industrielles. Notre équipe d’experts s’engage à fournir des solutions sur mesure, durables et de haute qualité.
              </SectionTitle>
            </div>
          </div>
          <div className="row">
            {services.map((service) => (
              <div className="col-lg-3 col-md-6" key={service.title}>
                <div className="service-item wow fadeInUp" data-wow-delay={service.delay}>
                  <CardImage image={service.image} type="service" />
                  <div className="service-body">
                    <div className="service-body-title">
                      <h3>{service.title}</h3>
                    </div>
                    <div className="service-content">
                      <p>
                      "Transformer les déchets en opportunités, pour une planète plus propre et une économie plus forte."
                      </p>
                      {/* <div className="service-content-footer">
                        <a className="readmore-btn" href="#projects">
                          view more
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="service-footer-btn wow fadeInUp" data-wow-delay="1.25s">
              <a className="btn-default" href="#services">
                view all services
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
