import React from "react";

const Card2 = ({ img, title, dec }) => {
  return (
    <div className=" p-5 ">
      <div className="d-md-flex  gap-2">
        <div className="p-1 d-flex flex-column align-items-start justify-content-center  text-start">
          <h6 className=" ">ADS • ADS • ADS</h6>
          <h2
            className="
          gradient-text
         
                  "
          >
            <span className="heading_text  h1">{title}</span>
          </h2>
          <p classNames="">{dec}</p>
        </div>
        <div className="">
          <img className="img-fluid rounded p-1" src={img} alt="img"></img>
        </div>
      </div>
    </div>
  );
};

export default Card2;
