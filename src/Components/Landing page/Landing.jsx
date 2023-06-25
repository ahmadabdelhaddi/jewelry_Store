import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Categories from "./Category/Categories";
import TestimonialCountainer from "./Testimonial/TestimonialCountainer";
import IndividualIntervalsExample from "./Sliderimg/Sliderimg";
import OurTeamCountainer from "./OurTeam/OurTeamCountainer";
export default function Landing() {
  return (
    <div>
      <IndividualIntervalsExample />
      <Categories />
      <AboutUs  />
      <TestimonialCountainer />
      <OurTeamCountainer />
    </div>
  );
}
