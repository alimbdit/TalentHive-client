import React, { createContext, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";

export const JobContext = createContext([]);
export const AppliedJobContext = createContext([]);

function App() {
  const { AllJobs } = useLoaderData();
  const [jobId, setJobId] = useState('');

  const handleViewDetails = (id) => {
    setJobId(id)

  }


  return (
    <JobContext.Provider value={{AllJobs, jobId, handleViewDetails}}>
      <div className="App font">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </JobContext.Provider>
  );
}

export default App;
