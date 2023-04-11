import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import { JobContext } from '../../App';
import Details from '../Details/Details';

const JobDetails = () => {

    const {AllJobs, jobId} = useContext(JobContext);
    const jobDetail = AllJobs[4]
    console.log(jobDetail)

    return (
        <div>
            <Banner>Job Details</Banner>
            <Details jobDetail={jobDetail}></Details>

        </div>
    );
};

export default JobDetails;