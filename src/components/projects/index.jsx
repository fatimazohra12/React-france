import React from "react";
import { CardImage } from "../card-image";
import { projects } from "../../data/landingPage";
import { SectionTitle } from "../section-title";
import "./projects.css";

export function Projects() {
  return (
    <section className="our-projects" id="projects">
      <div className="light-bg-section">
        <div className="container-fluid">
          <div className="row section-row">
            <div className="col-lg-12">
              <SectionTitle
                eyebrow="our projects"
                title="Explore our diverse range of projects"
              >
                We specialize in a wide range of construction services,
                including residential, commercial, and industrial projects.
              </SectionTitle>
            </div>
          </div>
          <div className="row">
            {projects.map((project) => (
              <div className="col-lg-3 col-md-6" key={project.title}>
                <div className="project-item wow fadeInUp" data-wow-delay={project.delay}>
                  <CardImage image={project.image} type="project" />
                  <div className="project-body">
                    <div className="project-body-title">
                      <h3>{project.title}</h3>
                    </div>
                    <div className="project-content">
                      <p>
                      "Transformer les déchets en opportunités, pour une planète plus propre et une économie plus forte."
                      </p>
                      <div className="project-content-footer">
                        <a className="readmore-btn" href="#projects">
                          view more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="project-footer-btn wow fadeInUp" data-wow-delay="1.25s">
              <a className="btn-default" href="#projects">
                view all projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
