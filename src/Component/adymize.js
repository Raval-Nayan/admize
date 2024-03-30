import React from 'react'
import { NavLink } from "react-router-dom";
import { IoMdReturnRight } from "react-icons/io";
const adymize = () => {
  return (
    <div>
    
    
    <div className="container rounded  shadow-lg  mt-5  ">
    <div className="text-center  p-3  p-5">
      <h3 className="gradient-text display-3">What makes us unique?</h3>
      <h6>Adymize V/S Others</h6>
    </div>
    <hr />

    <div className="bg-ser  p-3   ">
      <div className="d-md-flex justify-content-around   p-5 ">
        <div className="">
          <div>
            <h6 class=" m-0 py-5 px-15">OTHERS</h6>
          </div>
          <div className="d-flex gap-3">
            <div className="">
              <IoMdReturnRight />
            </div>
            <div>
              <p className="service_ps">Longer turnaround time</p>
            </div>
          </div>
          <div className="d-flex gap-3 ">
            <div className="">
              <IoMdReturnRight />
            </div>
            <div>
              <p className="service_ps">Mediocre methods</p>
            </div>
          </div>

          <div className="d-flex gap-3 ">
            <div className="">
              <IoMdReturnRight />
            </div>
            <div>
              <p className="service_ps">Lack of timely reporting</p>
            </div>
          </div>

          <div className="d-flex gap-3 ">
            <div className="">
              <IoMdReturnRight />
            </div>
            <div>
              <p className="service_ps">No prompt answers</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="gradient-text display-6 ">
            <h6 class="  m-0 py-5 px-15">Adymize</h6>
          </div>
          <div className="d-flex gap-3">
            <div className="">
              <IoMdReturnRight />
            </div>
            <div>
              <p className="service_p text-black">
                Faster and quick responses
              </p>
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="">
              <IoMdReturnRight />
            </div>
            <div>
              <p className="service_p text-black">Ethical Approach</p>
            </div>
          </div>

          <div className="d-flex gap-3">
            <div className="">
              <IoMdReturnRight />
            </div>
            <div>
              <p className="service_p text-black">Accurate Reporting</p>
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="">
              <IoMdReturnRight />
            </div>
            <div>
              <p className="service_p text-black">Precise Resolutions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center ">
        {" "}
        <button className="bg-white rounded border-0 shadow p-3">
          Still have a question?
          <NavLink className={"text-black"}> Chat with our experts</NavLink>
        </button>
      </div>
    </div>
  </div>{" "}</div>
  )
}

export default adymize