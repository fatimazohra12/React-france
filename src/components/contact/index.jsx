import React from "react";
import { SectionTitle } from "../section-title";
import { asset } from "../../utils/assets";
import "./contact.css";

export function Contact() {
  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-5">
            <div className="contact-sidebar wow fadeInUp" data-wow-delay="0.25s">
              <div className="contact-info">
                <div className="icon-box">
                  <img src={asset("icon-phone.svg")} alt="" />
                </div>
                <div className="contact-info-content">
                  <p>call support center 24/7</p>
                  <h3>+1 809 120 6705</h3>
                </div>
              </div>
              <div className="contact-info">
                <div className="icon-box">
                  <img src={asset("icon-mail.svg")} alt="" />
                </div>
                <div className="contact-info-content">
                  <p>write to us</p>
                  <h3>info@domain.com</h3>
                </div>
              </div>
              <div className="contact-info-image">
                <figure>
                  <img src={asset("contact-info-img.png")} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="contact-form wow fadeInUp" data-wow-delay="0.25s">
              <SectionTitle eyebrow="contact us" title="Get in touch with us" />
              <form action="#" data-toggle="validator" id="contactForm" method="POST">
                <div className="row">
                  <div className="form-group col-md-6 mb-4">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter Your name"
                      required
                      type="text"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter Your email"
                      required
                      type="email"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                      required
                      type="text"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <input
                      className="form-control"
                      id="website"
                      name="website"
                      placeholder="Subject"
                      required
                      type="text"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-md-12 mb-5">
                    <textarea
                      className="form-control"
                      id="msg"
                      name="msg"
                      placeholder="Message"
                      required
                      rows="3"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="col-md-12">
                    <button className="btn-default" type="submit">
                      submit
                    </button>
                    <div className="h3 hidden" id="msgSubmit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
