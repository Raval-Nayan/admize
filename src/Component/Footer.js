import React from "react";
import logo from "../image/logonew.avif";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container">
      {" "}
      <div>
        <div className="text-center p-3">
          <img className="img-fluid w-25" src={logo} alt="logo"></img>
        </div>
        <hr/>

        <div className="d-flex justify-content-around p-4">
          <div>
            <p className="service_p">© 2024 Adymize Private Limited</p>
          </div>
          <div className="d-flex   gap-2">
            {" "}
            <FaLinkedin className="display-6" />{" "}
            <FaInstagramSquare className="display-6" />{" "}
            <FaTwitter className="display-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
