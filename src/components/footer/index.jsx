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
                  <img src={asset("valmetaux-logo.png")} alt="Valmétaux" />
                </figure>
              </div>
              <div className="footer-content">
                <p>
                "Transformer les déchets en opportunités, pour une planète plus propre et une économie plus forte."
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footer-links">
              <h3>Nos services</h3>
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
              <h3>contactez-nous</h3>
              <FooterInfo icon="icon-phone.svg">+33 1 41 40 01 01</FooterInfo>
              <FooterInfo icon="icon-mail.svg">valmetaux@gmail.com</FooterInfo>
              <FooterInfo icon="icon-location.svg">
              5 rue de l’Ouest, 95100 Argenteuil
              </FooterInfo>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="footer-copyright-text">
                <p>Copyright © 2026 Valmétaux. All Rights Reserved.</p>
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
