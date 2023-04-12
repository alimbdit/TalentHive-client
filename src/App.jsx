import React, { createContext, useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer/Footer";


export const JobContext = createContext([]);
export const AppliedJobContext = createContext([]);
export const JobDetailContext = createContext([]);

function App() {
  const { AllJobs, initialJobs } = useLoaderData();
  
  const [appliedJob, setAppliedJob] = useState(initialJobs);

  return (
    <JobContext.Provider value={{AllJobs}}>
      <AppliedJobContext.Provider value={[appliedJob, setAppliedJob]}>
      <div className="App font">
        <Header></Header>
        <div className="min-h-[calac(100vh-100px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      </AppliedJobContext.Provider>
    </JobContext.Provider>
  );
}

export default App;
