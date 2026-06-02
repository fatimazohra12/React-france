import React from "react";
import { About } from "../about";
import { Blog } from "../blog";
import { CallToAction } from "../call-to-action";
import { Contact } from "../contact";
import { Faqs } from "../faqs";
import { Footer } from "../footer";
import { Hero } from "../hero";
import { Navigation } from "../navigation";
import { Preloader } from "../preloader";
import { Projects } from "../projects";
import { Services } from "../services";
import { Testimonials } from "../testimonials";
import { useBuiltupTheme } from "../../hooks/useBuiltupTheme";
import { WhyChooseUs } from "../why-choose-us";
import "./landing-page.css";

export function BuiltupPage() {
  useBuiltupTheme();

  return (
    <div className="landing-page">
      <Preloader />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <CallToAction />
      <Testimonials />
      <Faqs />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
