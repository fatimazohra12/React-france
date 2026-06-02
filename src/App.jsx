import React from "react";
import SmoothScroll from "smooth-scroll";
import { ValmetauxPage } from "./components/landing-page";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 90,
});

const App = () => <ValmetauxPage />;

export default App;
