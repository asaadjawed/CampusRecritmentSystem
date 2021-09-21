import { Button } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import { CompanyContext } from '../../Context/CompanyContext'


const JobCreation = () => {

    const { jobsSetData } = useContext(CompanyContext)

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
                        jobsSetData(jobsDetails)
                    }} >
                        Job Type : <input type="text" className="InputDetails" placeholder="Job Type" value={jobsDetails.JobType} onChange={(e) => setjobsDetails(e.target.value)} />
                        Skills: <input type="text" className="InputDetails" placeholder="Skills" value={jobsDetails.Skills} onChange={(e) => setjobsDetails(e.target.value)} />
                        Shift : <input type="text" className="InputDetails" placeholder="Shift" value={jobsDetails.Shift} onChange={(e) => setjobsDetails(e.target.value)} />
                        Responsibility: <textarea type="text" className="InputDetails" placeholder="Responsibilities" value={jobsDetails.Responsibility} onChange={(e) => setjobsDetails(e.target.value)} />

                        Requirements: <textarea type="text" className="InputDetails" placeholder="Requirements" value={jobsDetails.Requirements} onChange={(e) => setjobsDetails(e.target.value)} />

                        <Button type="submit">Submit</Button>

                    </form>
                </div>
            </div>

        </div>
    )
}


export default JobCreation