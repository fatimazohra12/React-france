import React from "react";
import { navItems } from "../../data/landingPage";
import { asset } from "../../utils/assets";
import "./navigation.css";

export function Navigation() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home">
              <img src={asset("logo.svg")} alt="Logo" />
            </a>
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  {navItems.map((item) => (
                    <li
                      className={`nav-item${item.highlighted ? " highlighted-menu" : ""}`}
                      key={item.href}
                    >
                      <a className="nav-link" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="header-btn d-inline-flex">
                <a className="btn-default" href="#contact">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="navbar-toggle" />
          </div>
        </nav>
        <div className="responsive-menu" />
      </div>
    </header>
  );
}
