import React from "react";
import "./Banner.css";
import Vector from "../../assets/images/Vector.png";

const Banner = ({ children }) => {
  return (
    <div className=" bg-accent bg-opacity-5 relative">
        <img className=" absolute left-0 bottom-0 z-50 " src={Vector} alt="" />
      <div className="my-container">
        
        <h1 className="text-3xl text-center font-extrabold text-title my-10">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
