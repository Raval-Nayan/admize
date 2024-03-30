import React from "react";
import p1 from "../image/p1.png";
import p2 from "../image/p2.png";

import p3 from "../image/p3.png";
import p4 from "../image/p4.png";
import { NavLink } from "react-router-dom";

import pay from "../image/daily-payment1.jpg";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";

const Clients = () => {
  return (
    <div id="clients ">
      <div className=" container ">
        <div className="Our_Clients text-center rounded p-5">
          <h1 className="text-white">Our Clients</h1>
        </div>
        <div className=" box-client bh-white shadow-lg">
          <div className="d-md-flex py-2 ">
            <div className="w-100">
              {" "}
              <img src={p1} className="img-fluid " alt="person"></img>
            </div>
            <div>
              <div className="text-start p-md-5 p-2 d-flex justify-content-center align-items-center">
                <h2 className="p-md-5 p-2">
                  Askin Astrogy worked his astrological wonders with Adymize's
                  enchanting services
                </h2>
              </div>
            </div>
          </div>

          <div className="d-md-flex  py-2">
            <div className="w-100">
              {" "}
              <img src={p2} className="img-fluid " alt="person"></img>
            </div>
            <div>
              <div className="text-start p-md-5 p-2 d-flex justify-content-center align-items-center">
                <h2 className="p-md-5 p-2">
                  Arjun Deshpande, the brain behind Generic Aadhaar, teamed up
                  with Adymize for a dynamic duo of innovation
                </h2>
              </div>
            </div>
          </div>

          <div className="d-md-flex py-2 ">
            <div className="w-100">
              {" "}
              <img src={p3} className="img-fluid " alt="person"></img>
            </div>
            <div>
              <div className="text-start p-md-5 p-2 d-flex justify-content-center align-items-center">
                <h2 className="p-md-5 p-2">
                  Naman Deshmukh effortlessly launched his course to stardom
                  with Adymize's magic touch
                </h2>
              </div>
            </div>
          </div>

          <div className="d-md-flex  py-2">
            <div className="w-100">
              {" "}
              <img src={p4} className="img-fluid " alt="person"></img>
            </div>
            <div>
              <div className="text-start p-md-5 p-2 d-flex justify-content-center align-items-center">
                <h2 className="p-md-5 p-2">
                  Realhit transformed its course into a digital sensation using
                  Adymize's powerful services
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className=" shadow-lg bg-white py-3 text-center pb-5">
          {" "}
          <button className="bg-white rounded border-0 shadow p-3">
            Want to create yours?
            <a aria-current="page" class="text-black active" href="/">
              {" "}
              Let's Schedule a Call
            </a>
          </button>
        </div>
      </div>


{/*How Is Start */}

      <div className="container rounded  shadow-lg  mt-5  ">
      <div className="text-center  p-3  p-5">
        <h3 className="gradient-text ">How it starts?</h3>
      </div>
      <hr />

      <div className="bg-ser     ">
        <div className="d-md-flex justify-content-between   ">
          <div className=" d-flex flex-column gap-4 px-5 align-items-center justify-content-center  ">
            <div className="d-flex   gap-3 ">
              <div className=" d-flex align-items-start justify-content-start">
                <TbCircleNumber1 className="display-5" />
              </div>
              <div>
                <h6 className="service_h3 h3">Plan Your Growth </h6>
                <p className="service_p">
                  Dream big, strategize with us, and turn plans into profits.
                </p>
              </div>
            </div>

            <div className="d-flex   gap-3 ">
              <div className=" d-flex align-items-start justify-content-start">
                <TbCircleNumber2 className="display-5" />
              </div>
              <div>
                <h6 className="service_h3 h3">Handover the project </h6>
                <p className="service_p">
                We're your project navigators, turning plans into reality. Smooth sailing guaranteed.
                </p>
              </div>
            </div>

            <div className="d-flex   gap-3 ">
              <div className=" d-flex align-items-start justify-content-start">
                <TbCircleNumber3 className="display-5" />
              </div>
              <div>
                <h3 className="service_h3 h3">Count the profit </h3>
                <p className="service_p">
                Sit back, relax, and let the profits set sail. Your success story starts with us!
                </p>
              </div>
            </div>
          </div>
          <div className="  d-flex align-items-center justify-content-center">
            <img
              src={pay}
              className=" img-fluid h-75"
              alt="payment"
            ></img>
          </div>
        </div>

        <div className="text-center ">
          {" "}
          <button className="bg-white shadow-lg rounded border-0 p-3 shadow ">
            Still have a question?
            <NavLink className={"text-black"}> Chat with our experts</NavLink>
          </button>
        </div>
      </div>
    </div>{" "}


    
    </div>
  );
};

export default Clients;
