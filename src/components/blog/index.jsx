import React from "react";
import { posts } from "../../data/landingPage";
import { SectionTitle } from "../section-title";
import { asset } from "../../utils/assets";
import "./blog.css";

export function Blog() {
  return (
    <section className="our-blog" id="blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle eyebrow="news & blog" title="Articles & blog posts">
              We specialize in a wide range of construction services, including
              residential, commercial, and industrial projects.
            </SectionTitle>
          </div>
        </div>
        <div className="row">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.title}>
              <article className="blog-item wow fadeInUp" data-wow-delay={post.delay}>
                <div className="post-featured-image" data-cursor-text="View">
                  <figure>
                    <a className="image-anime" href="#home">
                      <img src={asset(post.image)} alt="" />
                    </a>
                  </figure>
                </div>
                <div className="post-item-content">
                  <div className="post-item-body">
                    <h2>
                      <a href="#home">{post.title}</a>
                    </h2>
                  </div>
                  <div className="post-item-footer">
                    <a className="readmore-btn" href="#blog">
                      read more
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
