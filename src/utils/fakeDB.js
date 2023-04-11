const addToDb = id => {
    let appliedJob = []
  
    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
        appliedJob = JSON.parse(storedJob)
    }
  
   
    appliedJob.push(id);
    
    localStorage.setItem('applied-job', JSON.stringify(appliedJob))
  }


  const addDetails = id => {
    localStorage.setItem('job-details', JSON.stringify(id));
  }

  const getJobDetails = () => {
    let jobDetail = '';
    const storedDetails = localStorage.getItem('job-details')
    if (storedDetails) {
      jobDetail = JSON.parse(storedDetails)
    }
    return jobDetail
  }

  


  const getJobFromLocal = () => {
    let appliedJob = []
  
    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
        appliedJob = JSON.parse(storedJob)
    }
    return appliedJob
  }

  
  export { addToDb, getJobFromLocal, addDetails, getJobDetails}