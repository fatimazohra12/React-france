import React from "react";
import { asset } from "../../utils/assets";
import "./hero.css";

export function Hero() {
  return (
    <section className="hero bg-section hero-video" id="home">
      <div className="hero-bg-video">
        <video autoPlay id="myVideo" loop muted playsInline>
          <source src={asset("hero-bg-video.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="hero-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">welcome to Valmétaux</h3>
                <h1 className="text-anime-style-3" data-cursor="-opaque">
                  Achat vente des métaux 
                  Valorisez vos déchets
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                Achat fer et métaux pose de benne
                </p>
              </div>
              <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                <a className="btn-default" href="#about">
                Démarrer
                </a>
                <a className="btn-default btn-highlighted" href="#projects">
                voir les projets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
