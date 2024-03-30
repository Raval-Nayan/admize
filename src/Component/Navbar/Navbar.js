import React, { useState } from "react";

import { Link} from "react-scroll";
import "./navbar.css";
import logo from "../../image/logonew.avif";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [menu, setMenu] = useState(true);
  return (
    <div className=" ">
      {/* Desktop  Navbar */}
      <div className="container  pt-0 pt-md-4">
        <div className="navbar_container  bg_img shadow-lg rounded ">
          <div className=" w-md-25">
            <img className="img-fluid img_size    " src={logo} alt="logo" />
          </div>
          <div className="center pt-3 ">
            <ul className="d-flex gap-4   ">
              <li className="text_navlink">
                <Link smooth={true} duration={500} className={"text_navlink"} to="services">
                  Services
                </Link>
              </li>
              <li className="text_navlink">
                <Link className="text_navlink" to="clients">
                  Clients
                </Link>
              </li>
              <li className="text_navlink">
                <Link className="text_navlink" to="adymize">
                  Why Adymize?
                </Link>
              </li>
              <li className="text_navlink">
                <Link className="text_navlink" to="reviews">
                  Reviews
                </Link>
              </li>
              <li className="text_navlink">
                <Link className="text_navlink" to="faqs">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="border ">
            <div className="d-flex">
              {menu ? (
                <CiMenuFries
                  className="open_menu"
                  onClick={() => {
                    setMenu(false);
                  }}
                />
              ) : (
                <IoMdClose
                  className="close_menu"
                  onClick={() => {
                    setMenu(true);
                  }}
                />
              )}
            </div>
            <div className="center">
              {" "}
              <button className="btn_design  ">
                <span className="btn_text ">Chat Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="mobile_view">
          {menu ? null : (
            <div className="shadow-lg py-4">
              <ul className="d-flex flex-column gap-4">
                <li className="text_navlink">
                  <Link className="text_navlink" to="services">
                    Services
                  </Link>
                </li>
                <li className="text_navlink">
                  <Link className="text_navlink" to="clients">
                    Clients
                  </Link>
                </li>
                <li className="text_navlink">
                  <Link className="text_navlink" to="adymize">
                    Why Adymize?
                  </Link>
                </li>
                <li className="text_navlink">
                  <Link className="text_navlink" to="reviews">
                    Reviews
                  </Link>
                </li>
                <li className="text_navlink">
                  <Link className="text_navlink" to="faqs">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
