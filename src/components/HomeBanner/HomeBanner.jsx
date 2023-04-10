import React from "react";
import "./HomeBanner.css";
import Lottie from "lottie-react";
import bannerAnimation from "../../assets/bannerAnimation.json";

const HomeBanner = () => {
  return (
    <div className="bg-accent bg-opacity-5 min-h-[calc(100vh-108px)]">
      <div className="px-4  py-5 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:pr-8 flex gap-5 flex-col-reverse md:flex-row justify-between lg:py-16 items-center">
        <div className="w-full space-y-7 pl-8 ">
            <h1 className=" text-5xl lg:text-7xl font-extrabold leading-tight text-title">One Step <br/> Closer To Your <br/> 
            <span className="text-gradient">Dream Job</span>
            </h1>
            <p className="text-info text-lg font-medium">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn-primary">Get Started</button>
        </div>
        <div className="w-full">
          <Lottie className="lg:w-11/12 lg:ml-auto" animationData={bannerAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
