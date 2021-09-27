import React from "react";

import { Route, Switch } from "react-router-dom";

import LoginFormPage from "../Container/Login";
import SignupFormPage from "../Container/Signup";
import StudentDashboardPage from "../Container/StudentDashboard";
import CompanyDashBoardPage from "../Container/CompanyDasboard";
import AdminDashboardPage from "../Container/AdminDashboard";
import AddProfile from "../Container/StudentProfile";
import CompanyViewApp from "../Container/CompanyProfile";
import CompanyJobCreation from "../Container/JobPost";
import StudentViewVacancy from "../Container/StudentViewVacancy";
import ApplyForJob from "../Container/ApplyForJob";
import AdminProfilePage from "../Container/AdminProfile";
import AdminCmpnyPage from "../Container/AdminCmpnyPage";
import StudentAppliedCandidate from "../Container/StudentAppliedCandiate";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginFormPage} />
        <Route path="/SignUp" component={SignupFormPage} />
        <Route path="/StudentDashboard" component={StudentDashboardPage} />
        <Route path="/CompanyDashboard" component={CompanyDashBoardPage} />
        <Route path="/StudentsResume" component={CompanyViewApp} />
        <Route path="/AdminDashboard" component={AdminDashboardPage} />

        <Route path="/JobPost" component={CompanyJobCreation} />

        <Route path="/AdminProfile" component={AdminProfilePage} />
        <Route path="/AdminCmpnyViewData" component={AdminCmpnyPage} />
        <Route path="/AppliedCandidate" component={StudentAppliedCandidate} />
        <Route>
          <h1>Not Found 403</h1>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
