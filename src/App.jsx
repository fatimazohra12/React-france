import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation/index";
import { Header } from "./components/header/index";
import { Features } from "./components/features/index";
import { About } from "./components/about/index";
import { Services } from "./components/services/index";
import { Gallery } from "./components/gallery/index";
import { Testimonials } from "./components/testimonials/index";
import { Team } from "./components/team/index";
import { Contact } from "./components/contact/index";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
