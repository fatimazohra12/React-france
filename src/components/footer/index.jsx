import React from "react";
import { footerServices, navItems } from "../../data/landingPage";
import { FooterInfo } from "../footer-info";
import { asset } from "../../utils/assets";
import "./footer.css";

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <div className="about-footer">
              <div className="footer-logo">
                <figure>
                  <img src={asset("footer-logo.svg")} alt="" />
                </figure>
              </div>
              <div className="footer-content">
                <p>
                  Our post-construction services gives you peace of mind knowing
                  that we are still here for you even after.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footer-links">
              <h3>our services</h3>
              <ul>
                {footerServices.map((service) => (
                  <li key={service}>
                    <a href="#services">{service}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footer-links">
              <h3>company</h3>
              <ul>
                {navItems.slice(1).map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label.toLowerCase()}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footer-links footer-contact-box">
              <h3>contact us</h3>
              <FooterInfo icon="icon-phone.svg">+1 809 120 6705</FooterInfo>
              <FooterInfo icon="icon-mail.svg">info@domain.com</FooterInfo>
              <FooterInfo icon="icon-location.svg">
                37 San Juan Lane Graaf Florisstraat 22A,3021 CH
              </FooterInfo>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="footer-copyright-text">
                <p>Copyright © 2024 BuiltUp. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="footer-social-links">
                <ul>
                  {["instagram", "facebook-f", "x-twitter", "github", "linkedin-in"].map(
                    (network) => (
                      <li key={network}>
                        <a href="#home">
                          <i className={`fa-brands fa-${network}`} />
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
