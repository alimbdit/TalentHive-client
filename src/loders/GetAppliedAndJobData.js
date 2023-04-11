import { useState } from "react";
import { getJobFromLocal } from "../utils/fakeDB";

const getAppliedAndJobData = async () => {
  const jobsData = await fetch("jobdata.json");
  const AllJobs = await jobsData.json();

  const savedJobs = await getJobFromLocal();
  const initialJobs = [];
  
  for(const id of savedJobs) {
    const foundJob = AllJobs.find(job => job.id === id)
    if (foundJob) {
      initialJobs.push(foundProduct)
    }
  }

  return { AllJobs, initialJobs };
};

export { getAppliedAndJobData };
