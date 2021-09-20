import React from "react";
import { Link } from "react-router-dom";

const CompanyNav = () => {
  return (
    <>
      <div className="container">
        <nav className="NavClassCompany">
          <div>
            <h1>Company DashBoard</h1>
          </div>
          <div className="Nav_Item_Company">
           <Link to="/CompanyNav"><button>Available Candidate</button></Link> 
            <button>Job Creation</button>
          </div>
        </nav>
      </div>
    </>
  );
};
export default CompanyNav;
