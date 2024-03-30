import React from "react";
import img from "../image/pegasus.png";
const HeroSection = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="gradient-text">
        <span className="heading_text">
          Optimize Your Ads <br />{" "}
        </span>
        <span className="gradient-highlight heading_text"> For More Profit.</span>
      </h1>
      <p className="m-0 "><span className="m-text">3+ years | 50+ Brands | 35+ Crore Ad spent</span></p>
      <p>
        A dedicated team of specialists, delivering remarkable work to our
        clients worldwide!
      </p>

      <button className="btn_designs my-3 ">
        <span className="btn_text ">Book a Strategy Call</span>
      </button>
      <p className="py-4">Our Performance Marketing Services are Certified by</p>
      <div>
        <img className="img-fluid w-50" src={img} alt="img" />
      </div>
    </div>
  );
};

export default HeroSection;
