import React from "react";
import { engagements } from "../../data/landingPage";
import { SectionTitle } from "../section-title";
import "./blog.css";

export function Blog() {
  return (
    <section className="our-blog" id="engagements">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle eyebrow="Nos engagements" title="Un service clair, rapide et responsable">
              Chez Valmétaux, nous nous engageons à vous proposer une
              valorisation simple, transparente et adaptée à vos métaux.
            </SectionTitle>
          </div>
        </div>
        <div className="row">
          {engagements.map((engagement) => (
            <div className="col-lg-4 col-md-6" key={engagement.title}>
              <article className="engagement-item wow fadeInUp" data-wow-delay={engagement.delay}>
                <h3>{engagement.title}</h3>
                <p>{engagement.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
