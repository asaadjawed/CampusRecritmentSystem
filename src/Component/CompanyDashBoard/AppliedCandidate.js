import React, { useContext, useEffect } from 'react'
import { CompanyContext } from '../../Context/CompanyContext'
import { StudentContext } from '../../Context/StudentContext'


const AppliedCandidate = () => {

  const { AppliedCandidate, AppliedCandidatestate } = useContext(CompanyContext);
  const { JobsGetData, jobsVacancies } = useContext(StudentContext);

  useEffect(() => {
    AppliedCandidate();
    JobsGetData();
  }, [])


  return (
    
    <>
    {AppliedCandidatestate?.AppliedKey === jobsVacancies?.JobUniqueKey} 
    
    <div className="row CandidateJobsPortal">
    
{ <div className="col-lg-6" style={{ color: 'white' }}>

{AppliedCandidatestate.map((element, key) => {
  return (
    <div key={key} class="card col-lg-4" style={{ width: '18rem', marginTop: '1rem' }}>
      <div className="card-body">
        <h1>Candidate</h1>
        Name: <h5 className="card-title">{element.Name}</h5><br /> <br />
        Email: <p className="card-text">{element.Email}</p><br /> <br />
        CGPA: <p className="card-text">{element.CGPA}</p><br /> <br />
        Skills: <p className="card-text">{element.Skills}</p><br /> <br />
        Availability: <p className="card-text">{element.Availability}</p><br /> <br />



      </div>
    </div>
  )
})}
</div>

}


{
   <div  className="col-lg-6" style={{ color: 'white' }}>
   {jobsVacancies.map((element, key) => {
     return (
       <div key={key} class="card col-lg-4" style={{ width: '18rem', marginTop: '1rem' }}>
         <div className="card-body">
           <h1>Job Type</h1>
           Job Type: <h5 className="card-title">{element.JobType}</h5><br /> <br />
           Skills: <p className="card-text">{element.Skills}</p><br /> <br />
           Shift: <p className="card-text">{element.Shift}</p><br /> <br />
           Responsibility: <p className="card-text">{element.Responsibility}</p><br /> <br />
           Requirements: <p className="card-text">{element.Requirements}</p><br /> <br />
        
       


         </div>
       </div>
     )
   })}
 </div>

}
</div>
</>






  )
}

export default AppliedCandidate