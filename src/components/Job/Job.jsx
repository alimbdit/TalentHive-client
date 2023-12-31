import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const { id, logo, title, company, jobType, location, schedule, salary } = job;

  return (
    <div className="rounded-lg border-[#E8E8E8] border shadow p-10">
      <img className=" w-3/4 lg:w-1/2" src={logo} alt="" />
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
      <div className="text-center lg:text-left">
      <button
        onClick={() => navigate(`/job/${job.id}`)}
        className="btn-secondary "
      >
        View Details
      </button>
      </div>
    </div>
  );
};

export default Job;
