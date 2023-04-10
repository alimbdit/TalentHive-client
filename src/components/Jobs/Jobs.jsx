import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [seeAll, setSeeAll] = useState(false)

  useEffect(() => {
    fetch("jobdata.json")
      .then((res) => res.json())
      .then((data) => setJobs(seeAll ? data : data.slice(0, 4)));
  }, [seeAll, jobs]);

  return (
    <div className="my-container">
      <div className="mb-4">
        <h1 className="title">Featured Jobs</h1>
        <p className="text-info font-medium text-center py-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center my-10">
        {
            !seeAll && <button onClick={() => setSeeAll(true)} className="btn-primary">See All Jobs</button>
        }
        
      </div>
    </div>
  );
};

export default Jobs;
