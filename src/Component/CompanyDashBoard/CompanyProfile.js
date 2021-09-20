import React, { useEffect, useContext, useState } from 'react';
import { CompanyContext } from '../../Context/CompanyContext';

const CompanyProfile = () => {

  const { ViewProfileData, companiesData } = useContext(CompanyContext)

  console.log(companiesData, 'arr')



  useEffect(() => {
    ViewProfileData();
  }, [])

  return (
    <div style={{ backgroundColor: '#343a40', color: 'white'}}>
      {companiesData.map((element, key) => {
        return (
          <div key={key} class="card col-lg-4" style={{ width: '18rem', backgroundColor:'red', marginTop: '1rem' }}>
            <div className="card-body">
            FirstName: <h5 className="card-title">{element.FirstName}</h5>
             LastName: <p className="card-text">{element.LastName}</p>
             EPNO: <p className="card-text">{element.EPNO}</p>
             Education: <p className="card-text">{element.Education}</p>
             Email: <p className="card-text">{element.Email}</p>
             Address <p className="card-text">{element.Address}</p>
             CGPA: <p className="card-text">{element.CGPA}</p>
             Skills: <p className="card-text">{element.Skills}</p>
             UniversityName: <p className="card-text">{element.UniversityName}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default CompanyProfile