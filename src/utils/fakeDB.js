
// add applied job into local storage


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


  

  
//get the jobs from local storage

  const getJobFromLocal = () => {
    let appliedJob = []
  
    
    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
        appliedJob = JSON.parse(storedJob)
    }
    return appliedJob
  }


  //  add details id into local Storage

  const addDetails = id => {
    localStorage.setItem('job-details', JSON.stringify(id));
  }

   //  get details id into local Storage

  const getJobDetails = () => {
    let jobDetail = '';
    const storedDetails = localStorage.getItem('job-details')
    if (storedDetails) {
      jobDetail = JSON.parse(storedDetails)
    }
    return jobDetail
  }

  
  export { addToDb, getJobFromLocal, addDetails, getJobDetails}