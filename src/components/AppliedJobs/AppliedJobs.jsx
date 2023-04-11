import React, { useContext } from 'react';
import { AppliedJobContext } from '../../App';
import Banner from '../Banner/Banner';

const AppliedJobs = () => {

    const [appliedJob, setAppliedJob] = useContext(AppliedJobContext || []);
    console.log(appliedJob, 'applied')


    return (
        <div>
            <Banner>Applied Jobs</Banner>
        </div>
    );
};

export default AppliedJobs;