import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";

const CompanyNav = () => {
  const {handleLogout} = useContext(GlobalContext)
  return (
    <>
      <div className="container">
        <nav className="NavClassCompany">
          <div>
            <h1>Company DashBoard</h1>
          </div>
          <div className="Nav_Item_Company">
           <Link to="/CompanyDashboard/StudentsResume"><button>Available Candidate</button></Link> 
           <Link to="/CompanyDashboard/JobPost"> <button>Job Creation</button></Link>
           <Link to="/CompanyDashboard/AppliedCandidate"> <button>Applied Candidate</button></Link>
           <button onClick={handleLogout} > LogOut </button>
          </div>
        </nav>
      </div>
    </>
  );
};
export default CompanyNav;
