import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Job = ({ job }) => {
  console.log(job);

  const { logo, title, company, jobType, location, schedule, salary } = job;

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
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          
          <p className="text-xl font-semibold">{location}</p>
        </span>

        <span className="text-info flex gap-2 ">
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
         
            <p className="text-xl font-semibold">Salary: {salary}</p>
          
        </span>
      </div>
      <button className="btn-secondary ">View Details</button>
    </div>
  );
};

export default Job;
