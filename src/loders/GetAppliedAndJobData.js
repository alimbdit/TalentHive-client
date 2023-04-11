import { useState } from "react";


const getAppliedAndJobData = async () => {

   
    

    const jobsData = await fetch("jobdata.json");
    const AllJobs = await jobsData.json();

    
  

 
  return {AllJobs}

}

export {
    getAppliedAndJobData,
}