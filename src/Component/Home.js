import React from "react";
import Services from "./Services";
import HeroSection from "./HeroSection";
import Clients from "./Clients";
import Navbar from "./Navbar/Navbar";
import { Element } from "react-scroll";
import Adymize from "./adymize";
import Faq from "./Faq";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className=" service-bg  ">
      <Navbar />

      <HeroSection />
      <Element name="services">
        <Services />
      </Element>

      <Element name="clients">
        <Clients />
      </Element>

      <Element name="adymize">
        <Adymize />
      </Element>

      <Element name="faqs">
        <Faq />
      </Element>
   <Footer/>
    </div>
  );
};

export default Home;
