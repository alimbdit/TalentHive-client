import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';

import Details from '../Details/Details';
import { getJobDetails } from '../../utils/fakeDB';
import { JobContext } from '../../App';
import { useParams } from 'react-router-dom';

const JobDetails = () => {

    const {AllJobs} = useContext(JobContext);

    const jobId = useParams().id
    
    
    // const jobId = getJobDetails()
    const jobDetail = AllJobs.find(singleJob => singleJob.id === jobId)
    console.log(jobId, jobDetail)


    return (
        <div>
            <Banner>Job Details</Banner>
            <Details jobDetail={jobDetail} ></Details>

        </div>
    );
};

export default JobDetails;