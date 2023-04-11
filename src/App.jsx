import React, { createContext, useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { addDetails, getJobDetails, getJobFromLocal } from "./utils/fakeDB";

export const JobContext = createContext([]);
export const AppliedJobContext = createContext([]);
export const JobDetailContext = createContext([]);

function App() {
  const { AllJobs, initialJobs } = useLoaderData();
  const [jobId, setJobId] = useState('');
  const [detailJob, setDetailJob] = useState({})
  const [appliedJob, setAppliedJob] = useState(initialJobs);

  const handleApply = (id) => {
    addToDb(id);
    setAppliedJob([...appliedJob, id]);
  };

  useEffect(() => {
    const jobDetailsData = getJobDetails();
    setDetailJob(jobDetailsData);
  }, []);

  const handleViewDetails = (id) => {
      addDetails(id)
      // setJobId(id)
      setDetailJob(id)
  }

  return (
    <JobContext.Provider value={{AllJobs}}>
      <AppliedJobContext.Provider value={[appliedJob, setAppliedJob]}>
      <JobDetailContext.Provider value={{handleViewDetails}}>
      <div className="App font">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      </JobDetailContext.Provider>
      </AppliedJobContext.Provider>
    </JobContext.Provider>
  );
}

export default App;
