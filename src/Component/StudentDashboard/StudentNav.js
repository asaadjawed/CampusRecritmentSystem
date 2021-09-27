import { Button } from "bootstrap";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
// import {UserImg} from '../../assets/'

import { StudentContext } from "../../Context/StudentContext";

const StudentNav = () => {
  const { handleLogout } = useContext(GlobalContext);
  return (
    <>
      <div className="container">
        <nav className="NavClass">
          <div>
            <h1>Student DashBoard</h1>
          </div>
          <div className="Nav_Item">
            <Link to="/StudentDashboard/addProfile">
              {" "}
              <button>Add Profile</button>
            </Link>
            <Link to="/StudentDashboard/ViewAvailableJobs">
              <button>View Jobs</button>
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </nav>
      </div>
    </>
  );
};
export default StudentNav;
