import React from "react";

import HeroSection from "./HeroSection";
import TrustedBy from "./TrustedBy";
import Services from "./Services";
import OurWork from "./OurWork";
import Teams from "./Teams";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />

      <TrustedBy />

      <div id="services">
        <Services />
      </div>

      <OurWork />

      <Teams />
    </div>
  );
}