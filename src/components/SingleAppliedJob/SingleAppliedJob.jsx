import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const SingleAppliedJob = ({ singleAppliedJob }) => {

    const navigate = useNavigate()

  const { id, logo, title, company, jobType, location, schedule, salary } =
    singleAppliedJob;
  console.log(singleAppliedJob);
  return (
    <div className="rounded-lg border-[#E8E8E8] border shadow p-7 flex items-center gap-8">
      <div className="w-60 h-60 bg-[#F4F4F4] rounded-lg flex">
        <img className=" m-auto px-5" src={logo} alt="" />
      </div>
      <div>
        <h3 className="text-2xl font-extrabold text-gray mb-2 mt-8">{title}</h3>
        <p className="text-xl font-semibold text-info">{company}</p>
        <div className="space-x-2 my-4">
          <button className="btn-outline ">{jobType}</button>
          <button className="btn-outline">{schedule}</button>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 mb-5">
          <span className="text-info flex gap-2">
            <MapPinIcon className="h-6 w-6 " />

            <p className="text-xl font-semibold">{location}</p>
          </span>

          <span className="text-info flex gap-2 ">
            <CurrencyDollarIcon className="h-6 w-6" />

            <p className="text-xl font-semibold">Salary: {salary}</p>
          </span>
        </div>
      </div>
      <div className="ml-auto mr-5">
      <button onClick={() => navigate(`/details/${singleAppliedJob.id}`)} className="btn-secondary ">View Details</button>
      </div>
    </div>
  );
};

export default SingleAppliedJob;
