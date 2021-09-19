import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
// import {UserImg} from '../../assets/'

const StudentNav = () => {
  return (
    <>
    <div className="container">

      <nav className="NavClass">
        <div>
          <h1>Student DashBoard</h1>
        </div>
        <div className="Nav_Item">
          
           <Link to ="/addProfile"> <button>Add Profile</button></Link> 
            <button>View Jobs</button>
            <button>Apply for Jobs</button>
          
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
