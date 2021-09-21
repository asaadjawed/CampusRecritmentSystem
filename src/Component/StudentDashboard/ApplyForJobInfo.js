import React, {useContext, useState} from 'react';
import { Button } from 'react-bootstrap';
import { StudentContext } from '../../Context/StudentContext';

const ApplyForJobInfo = ()=>{

    const { StudentSetInformation } = useContext(StudentContext)

    const [StudentInformation, setStudentInformation] = useState({
        Name: "",
        Email: "",
        CGPA: "",
        Skills: "",
        Availability: "",


    })
    return(
        <div>
            <div className="container JobPostHeading">
                <h1>Job Post </h1>
            </div>

            <div className="JobPosting">
                <div className="jobForm">
                    <form className="FormDetails" onSubmit={(e) => {
                        e.preventDefault();
                         StudentSetInformation(StudentInformation)
                    }} >
                        Name :<input type="text" className="InputDetails" placeholder="Name" value={StudentInformation.Name} onChange={(e) => setStudentInformation({ ...StudentInformation, JobType: e.target.value})} />
                        Email: <input type="text" className="InputDetails" placeholder="Email" value={StudentInformation.Email} onChange={(e) => setStudentInformation({...StudentInformation, Skills: e.target.value})} />
                        CGPA : <input type="text" className="InputDetails" placeholder="CGPA" value={StudentInformation.CGPA} onChange={(e) => setStudentInformation({...StudentInformation, Shift: e.target.value})} />
                        Skills: <input type="text" className="InputDetails" placeholder="Skills" value={StudentInformation.Skills} onChange={(e) => setStudentInformation({...StudentInformation, Responsibility:e.target.value})} />

                        Availability: <input type="text" className="InputDetails" placeholder="Availability" value={StudentInformation.Availability} onChange={(e) => setStudentInformation({...StudentInformation, Requirements: e.target.value})} />

                        <Button type="submit">Submit</Button>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default ApplyForJobInfo