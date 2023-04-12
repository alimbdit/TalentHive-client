import React, { useContext, useState } from "react";
import { AppliedJobContext } from "../../App";
import Banner from "../Banner/Banner";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";

const AppliedJobs = () => {
  const [appliedJob, setAppliedJob] = useContext(AppliedJobContext || []);
  const [allAppliedJob, setAllAppliedJob] = useState(appliedJob)
  console.log(appliedJob, "applied");

  const handleRemote = () => {
    const remoteJobs = appliedJob.filter(applied => applied.jobType === "Remote")
    setAllAppliedJob(remoteJobs)
  }
  const handleOnsite = () => {
    const onsiteJobs = appliedJob.filter(applied => applied.jobType === "Onsite")
    setAllAppliedJob(onsiteJobs)
  }

  return (
    <div>
      <Banner>Applied Jobs</Banner>
      <div className="flex justify-end pt-10 px-4 py-5 lg:pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn-outline m-1">
            Filter By
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={handleRemote} className="text-gray font-bold">Remote</button>
            </li>
            <li>
            <button onClick={handleOnsite} className="text-gray font-bold">Onsite</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-container space-y-6">
        {allAppliedJob.map((singleAppliedJob) => (
          <SingleAppliedJob
            key={singleAppliedJob.id}
            singleAppliedJob={singleAppliedJob}
          ></SingleAppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
