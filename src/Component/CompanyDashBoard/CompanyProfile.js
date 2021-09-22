import React, { useEffect, useContext, useState } from 'react';
import { CompanyContext } from '../../Context/CompanyContext';

const CompanyProfileView = () => {

  const { ViewProfileData, companiesData } = useContext(CompanyContext)

  console.log(companiesData, 'arr')



  useEffect(() => {
    ViewProfileData();
  }, [])

  return (
    <div style={{ backgroundColor: '#343a40', color: 'white' }}>
      {companiesData.map((element, key) => {
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


            </div>
          </div>
        )
      })}
    </div>
  )
}
export default CompanyProfileView