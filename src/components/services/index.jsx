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
              <SectionTitle eyebrow="Nos services" title="Nos prestations pour vos métaux">
                Chez Valmétaux, nous vous accompagnons dans la récupération, le
                recyclage et le rachat de métaux avec des solutions rapides,
                fiables et adaptées à vos besoins.
              </SectionTitle>
            </div>
          </div>
          <div className="row">
            {services.map((service) => (
              <div className="col-lg-4 col-md-6" key={service.title}>
                <div className="service-item wow fadeInUp" data-wow-delay={service.delay}>
                  <CardImage image={service.image} type="service" />
                  <div className="service-body">
                    <div className="service-body-title">
                      <h3>{service.title}</h3>
                    </div>
                    <div className="service-content">
                      <p>{service.description}</p>
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
