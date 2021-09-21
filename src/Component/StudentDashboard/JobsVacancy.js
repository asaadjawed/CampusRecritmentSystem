
import { Button } from 'react-bootstrap'
import React , {useContext, useEffect} from 'react'
import { StudentContext } from '../../Context/StudentContext'
import { Link } from 'react-router-dom'


const JobsVacancy = ()=>{
        
    const { JobsGetData,  jobsVacancies,} = useContext(StudentContext)


  useEffect(()=>{
    JobsGetData();
  }, [])


    return(
        
        <div style={{ backgroundColor: '#343a40', color: 'white' }}>
        {jobsVacancies.map((element, key) => {
          return (
            <div key={key} class="card col-lg-4" style={{ width: '18rem', backgroundColor: 'red', marginTop: '1rem' }}>
              <div className="card-body">
                Job Type: <h5 className="card-title">{element.JobType}</h5><br /> <br />
                Skills: <p className="card-text">{element.Skills}</p><br /> <br />
                Shift: <p className="card-text">{element.Shift}</p><br /> <br />
                Responsibility: <p className="card-text">{element.Responsibility}</p><br /> <br />
                Requirements: <p className="card-text">{element.Requirements}</p><br /> <br />
               <Link to="/ApplyStdnInfo"> <Button>Apply</Button></Link>
            
  
  
              </div>
            </div>
          )
        })}
      </div>




            
    )
}
export default JobsVacancy

