import React from "react";
import { testimonials } from "../../data/landingPage";
import { SectionTitle } from "../section-title";
import { Stars } from "../stars";
import { asset } from "../../utils/assets";
import "./testimonials.css";

export function Testimonials() {
  return (
    <section className="our-testimonial" id="testimonials">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle
              eyebrow="testimonials"
              title="What people are saying about us"
            >
              We specialize in a wide range of construction services, including
              residential, commercial, and industrial projects.
            </SectionTitle>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-slider">
              <div className="swiper">
                <div className="swiper-wrapper" data-cursor-text="Drag">
                  {testimonials.map((testimonial) => (
                    <div className="swiper-slide" key={testimonial.name}>
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <Stars />
                          <div className="testimonial-content">
                            <p>
                              We specialize in a wide range of construction
                              services, including residential, commercial, and
                              industrial projects. From initial design to final
                              inspection, we work closely with our clients to
                              understand their unique needs and vision.
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src={asset(testimonial.image)} alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
