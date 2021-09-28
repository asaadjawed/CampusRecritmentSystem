import React , {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import { AdminContext } from '../../Context/AdminContext';
import { StudentContext } from '../../Context/StudentContext';

const AdminCmpnyProfile = () => {
    const { JobsGetData, jobsVacancies, DeleteKey } = useContext(StudentContext)


    useEffect(() => {
        JobsGetData();


    }, [])
    return (



        <div style={{ backgroundColor: '#343a40', color: 'white' }}>
            {jobsVacancies.map((element, key) => {
                console.log(element,"element");
                return (
                    <div key={key} class="card col-lg-4" style={{ width: '18rem', backgroundColor: 'red', marginTop: '1rem' }}>
                        <div className="card-body">
                            Job Type: <h5 className="card-title">{element.JobType}</h5><br /> <br />
                            Skills: <p className="card-text">{element.Skills}</p><br /> <br />
                            Shift: <p className="card-text">{element.Shift}</p><br /> <br />
                            Responsibility: <p className="card-text">{element.Responsibility}</p><br /> <br />
                            Requirements: <p className="card-text">{element.Requirements}</p><br /> <br />
                            <Button onClick={()=> DeleteKey(element.JobUniqueKey) } >Delete</Button>
                           



                        </div>
                    </div>
                )
            })}
        </div>





    )

}

export default AdminCmpnyProfile