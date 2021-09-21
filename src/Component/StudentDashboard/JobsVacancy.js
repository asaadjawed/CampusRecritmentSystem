
import React , {useContext, useEffect} from 'react'
import { StudentContext } from '../../Context/StudentContext'


const JobsVacancy = ()=>{
        
    const { JobsGetData,  jobsVacancies} = useContext(StudentContext)


  useEffect(()=>{
    JobsGetData();
  }, [])


    return(
        
        <div style={{ backgroundColor: '#343a40', color: 'white' }}>
        {jobsVacancies.map((element, key) => {
          return (
            <div key={key} class="card col-lg-4" style={{ width: '18rem', backgroundColor: 'red', marginTop: '1rem' }}>
              <div className="card-body">
                Job Type: <h5 className="card-title">{element.JobType}</h5>
                Skills: <p className="card-text">{element.Skills}</p>
                Shift: <p className="card-text">{element.Shift}</p>
                Responsibility: <p className="card-text">{element.Responsibility}</p>
                Requirements: <p className="card-text">{element.Requirements}</p>
            
  
  
              </div>
            </div>
          )
        })}
      </div>




            
    )
}
export default JobsVacancy

