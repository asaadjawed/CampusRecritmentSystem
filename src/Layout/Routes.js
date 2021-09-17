

import React from "react";

import { Route, Switch } from "react-router-dom";

import LoginFormPage from "../Container/Login";
import SignupFormPage from "../Container/Signup";
import StudentDashboardPage from "../Container/StudentDashboard";
import CompanyDashBoardPage from "../Container/Company";
import AdminDashboardPage from "../Container/Admin";

const Routes = () => {
  return (
    <>
    <Switch>
        
          <Route exact path="/" component={LoginFormPage} />
          <Route path="/SignUp" component={SignupFormPage} />
          <Route path="/StudentDashboard" component={StudentDashboardPage} />
          <Route path="/CompanyDashboard" component={CompanyDashBoardPage} />
          <Route path="/AdminDashboard" component={AdminDashboardPage} />
          </Switch>
    </>
  );
};

export default Routes;
