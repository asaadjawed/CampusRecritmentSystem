

import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginFormPage from "../Container/Login";
import SignupFormPage from "../Container/Signup";
import StudentDashboardPage from "../Container/StudentDashboard";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginFormPage} />
          <Route path="/SignUp" component={SignupFormPage} />
          <Route path="/StudentDashboard" component={StudentDashboardPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
