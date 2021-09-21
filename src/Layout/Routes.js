

import React from "react";

import { Route, Switch } from "react-router-dom";

import LoginFormPage from "../Container/Login";
import SignupFormPage from "../Container/Signup";
import StudentDashboardPage from "../Container/StudentDashboard";
import CompanyDashBoardPage from "../Container/CompanyDasboard";
import AdminDashboardPage from "../Container/Admin";
import AddProfile from "../Container/StudentProfile";
import CompanyViewApp from "../Container/CompanyProfile";
import CompanyJobCreation from "../Container/JobPost";
import StudentViewVacancy from "../Container/StudentViewVacancy"


const Routes = () => {
  return (
    <>
    <Switch>
        
          <Route exact path="/" component={LoginFormPage} />
          <Route path="/SignUp" component={SignupFormPage} />
          <Route path="/StudentDashboard" component={StudentDashboardPage} />
          <Route path="/CompanyDashboard" component={CompanyDashBoardPage} />
          <Route path="/StudentsResume" component={CompanyViewApp} ></Route>
          <Route path="/AdminDashboard" component={AdminDashboardPage} />
          <Route path="/addProfile" component={AddProfile} />
          <Route path="/JobPost" component={CompanyJobCreation}></Route>
          <Route path="/ViewAvailableJobs" component={StudentViewVacancy}></Route>
          </Switch>
    </>
  );
};

export default Routes;
