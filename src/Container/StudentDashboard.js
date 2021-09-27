<<<<<<< HEAD
import React, { useContext } from "react";
import "../Component/StudentDashboard/StudentDashboard.css";
import StudentNav from "../Component/StudentDashboard/StudentNav";
import { GlobalContext } from "../Context/GlobalContext";
import AddProfile from "./StudentProfile";
import ApplyForJob from "./ApplyForJob";
import StudentViewVacancy from "./StudentViewVacancy";
=======
import React, { useContext } from 'react';
import '../Component/StudentDashboard/StudentDashboard.css'
import StudentNav from '../Component/StudentDashboard/StudentNav';
import { GlobalContext } from '../Context/GlobalContext';
import AddProfile from './StudentProfile';
import ApplyForJob from './ApplyForJob';
import StudentViewVacancy from './StudentViewVacancy';
>>>>>>> 15be0c48107bf54c2aff95801598bc073eda1fed

import { Route, Switch } from "react-router-dom";
import LoginForm from "../Component/Auth/Login";

const StudentDashboardPage = () => {
  const { userData } = useContext(GlobalContext);
  console.log(userData, "US");

  console.log(userData, "role");
  return (
    <>
      {userData.AccountType === "student" ? (
        <>
          <StudentNav />
          <Switch>
            <Route
              exact
              path="/StudentDashboard/addProfile"
              component={AddProfile}
            />
            <Route path="/ApplyStdnInfo" component={ApplyForJob} />
            <Route
              path="/StudentDashboard/ViewAvailableJobs"
              component={StudentViewVacancy}
            />
            <Route path="/fahad" component={StudentViewVacancy} />
          </Switch>
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </>
  );
};

export default StudentDashboardPage;
