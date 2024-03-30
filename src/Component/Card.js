import React from "react";

const Card = ({ title, img, dec }) => {
  return (
    <div className="  ">
      <div className="d-md-flex  gap-2">
        <div className="">
          <img className="img-fluid rounded p-4" src={img} alt="img"></img>
        </div>
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
      </div>
    </div>
  );
};

export default Card;
