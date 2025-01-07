import React from "react";
import { HoverImageLinks } from "./hoverImageLinks";
const Portfolio = () => {


  return (
    <div id="portfolio" className="h-screen pt-20 px-20  max-md:px-5">
      <h1 className="text-center text-4xl font-bold uppercase mb-7 ">Portfolio</h1>
     
      <section className="space-y-7">
 
        <HoverImageLinks />
      </section>
    </div>
  );
};

export default Portfolio;

