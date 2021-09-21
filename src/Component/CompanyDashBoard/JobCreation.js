import { Button } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import { CompanyContext } from '../../Context/CompanyContext'


const JobCreation = () => {

    const { JobsSetData } = useContext(CompanyContext)

    const [jobsDetails, setjobsDetails] = useState({
        JobType: "",
        Skills: "",
        Shift: "",
        Responsibility: "",
        Requirements: "",


    })

    return (
        <div>
            <div className="container JobPostHeading">
                <h1>Job Post </h1>
            </div>

            <div className="JobPosting">
                <div className="jobForm">
                    <form className="FormDetails" onSubmit={(e) => {
                        e.preventDefault();
                        JobsSetData(jobsDetails)
                    }} >
                        Job Type :<input type="text" className="InputDetails" placeholder="Job Type" value={jobsDetails.JobType} onChange={(e) => setjobsDetails({ ...jobsDetails, JobType: e.target.value})} />
                        Skills: <input type="text" className="InputDetails" placeholder="Skills" value={jobsDetails.Skills} onChange={(e) => setjobsDetails({...jobsDetails, Skills: e.target.value})} />
                        Shift : <input type="text" className="InputDetails" placeholder="Shift" value={jobsDetails.Shift} onChange={(e) => setjobsDetails({...jobsDetails, Shift: e.target.value})} />
                        Responsibility: <textarea type="text" className="InputDetails" placeholder="Responsibilities" value={jobsDetails.Responsibility} onChange={(e) => setjobsDetails({...jobsDetails, Responsibility:e.target.value})} />

                        Requirements: <textarea type="text" className="InputDetails" placeholder="Requirements" value={jobsDetails.Requirements} onChange={(e) => setjobsDetails({...jobsDetails, Requirements: e.target.value})} />

                        <Button type="submit">Submit</Button>

                    </form>
                </div>
            </div>

        </div>
    )
}


export default JobCreation