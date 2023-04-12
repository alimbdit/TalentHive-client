import React, { useContext, useEffect, useState } from 'react';
import { MapPinIcon, CalendarDaysIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, } from "@heroicons/react/24/outline";
import { AppliedJobContext,} from '../../App';

import { toast } from 'react-hot-toast';
import { addToDb } from '../../utils/fakeDB';


const Details = ({jobDetail}) => {

    const [appliedJob, setAppliedJob] = useContext(AppliedJobContext || []);

    
  console.log(jobDetail)


    const handleApply = job => {
        let newJob = [];
        const exists = appliedJob.find(
          existingJob => existingJob.id === job.id
        )
        if (!exists) {
            newJob = [...appliedJob, job];
            toast.success('Apply Successful! 👍', { autoClose: 500 })
        addToDb(job.id)
        setAppliedJob(newJob)
        } else {
            toast.error('You have applied already! 🔥', { autoClose: 500 })
        }  
      }

  const {
    id,
    company,
    title,
    jobType,
    address,
    schedule,
    salary,
    description,
    responsibility,
    education,
    experience,
    contact,
  } = jobDetail;
  

  return (
    <div className="my-container flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-2/3">
        <p className="text-info mb-6">
          <span className="font-bold text-title">Job Description: </span>
          {description}
        </p>
        <p className="text-info mb-6">
          <span className="font-bold text-title">Job Responsibility: </span>
          {responsibility}
        </p>
        <p className="text-info mb-6">
          <span className="font-bold text-title block mb-3">
            Educational Requirements:{" "}
          </span>
          {education}
        </p>
        <p className="text-info mb-6">
          <span className="font-bold text-title block mb-3">Experiences: </span>
          {experience}
        </p>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div className="p-8 rounded-lg bg-accent bg-opacity-10">
          <div>
            <h3 className="text-xl font-extrabold text-title ">Job Details</h3>
            <hr className="my-4" />

            <span className="text-info flex gap-2 items-center mb-3">
              <CurrencyDollarIcon className="h-6 w-6 text-neutral" />

              <p className="text-xl font-bold text-gray">
                Salary : <span className="text-info">{salary}</span>
              </p>
            </span>
            <span className="text-info flex gap-2">
              <CalendarDaysIcon className="h-6 w-6 text-neutral" />
              <p className="text-xl font-bold text-gray">
                Job Title : <span className="text-info">{title}</span>
              </p>
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-extrabold text-title ">Contact Information</h3>
            <hr className="my-4" />
            <span className="text-info flex gap-2 mb-3">
              <PhoneIcon className="h-6 w-6 text-neutral" />
              <p className="text-xl font-bold text-gray">
              Phone : <span className="text-info">{contact?.phone }</span>
              </p>
            </span>
            <span className="text-info flex gap-2 mb-3">
              <EnvelopeIcon className="h-6 w-6 text-neutral" />
              <p className="text-xl font-bold text-gray">
              Email : <span className="text-info">{contact?.email}</span>
              </p>
            </span>
            <span className="text-info flex gap-2 max-w-">
            <MapPinIcon className="h-8 w-8 text-neutral" />
              <p className="text-xl font-bold text-gray">
              Address : <span className="text-info">{address}</span>
              </p>
            </span>
          </div>
        </div>
        <div className="pr-2 mt-auto">
          <button onClick={() => handleApply(jobDetail)} className="btn-primary w-full ">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
