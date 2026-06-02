import React from "react";
import SmoothScroll from "smooth-scroll";
import { BuiltupPage } from "./components/landing-page";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 90,
});

const App = () => <BuiltupPage />;

export default App;
