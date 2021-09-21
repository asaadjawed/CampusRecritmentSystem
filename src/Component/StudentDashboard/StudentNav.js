import { Button } from "bootstrap";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
// import {UserImg} from '../../assets/'

import { StudentContext } from "../../Context/StudentContext";


const StudentNav = () => {
  const {handleLogout}  = useContext(GlobalContext)
  return (
    <>
    <div className="container">

      <nav className="NavClass">
        <div>
          <h1>Student DashBoard</h1>
        </div>
        <div className="Nav_Item">
          
           <Link to ="/addProfile"> <button>Add Profile</button></Link> 
           <Link to="/ViewAvailableJobs"><button>View Jobs</button></Link> 
            <button>Apply for Jobs</button>
            <button onClick={handleLogout}>Logout</button>
          
        </div>
      </nav>
      </div>




      {/* <div className="StdView">
        <h1 className="StdPortalHeading">WELCOME TO STUDENT PORTAL</h1>
        <img></img>
      </div> */}
      </>
 
  );
};
export default StudentNav;
