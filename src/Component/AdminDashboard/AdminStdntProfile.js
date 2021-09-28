import { Button } from 'react-bootstrap'
import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import AdminCmpnyPage from '../../Container/AdminCmpnyPage'
import { CompanyContext } from '../../Context/CompanyContext'


const AdminProfile = () => {
    const { ViewProfileData, companiesData, DeleteKey } = useContext(CompanyContext)

    console.log(companiesData, 'arr')



    useEffect(() => {
        ViewProfileData();
    }, [])

    console.log(companiesData, 'companiesData')



    return (
        <div style={{ backgroundColor: '#343a40', color: 'white' }}>
            {companiesData.map((element, key) => {
                console.log(element, 'element')
                return (
                    <div key={key} class="card col-lg-4" style={{ width: '18rem', backgroundColor: 'red', marginTop: '1rem' }}>
                        <div className="card-body">
                            EPNO: <h5 className="card-title">{element.EPNO}</h5> <br /> <br />
                            FirstName: <p className="card-text">{element.FirstName}</p><br /> <br />
                            LastName: <p className="card-text">{element.LastName}</p><br /> <br />
                            Email: <p className="card-text">{element.Email}</p><br /> <br />
                            Address: <p className="card-text">{element.Address}</p><br /> <br />
                            Education <p className="card-text">{element.Education}</p><br /> <br />
                            UniversityName: <p className="card-text">{element.UniversityName}</p><br /> <br />
                            CGPA: <p className="card-text">{element.CGPA}</p><br /> <br />
                            Skills: <p className="card-text">{element.Skills}</p><br /> <br />
                            <Button onClick={() => DeleteKey(element.UniqueKey)}>Delete</Button>
                           



                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AdminProfile