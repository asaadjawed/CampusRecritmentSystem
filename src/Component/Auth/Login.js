import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import Header from "../Header/Header";
import "../Header/style.css";

import "../Auth/auth.css";

import { GlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
import { Alert } from "bootstrap";

const LoginForm = () => {

  const {HandleLoginUser, error } = useContext(GlobalContext);
  const [user, setuser] = useState({
    email: "",
    password: "",
    AccountType: "",
  });

  return (
    <div>
      <Header />

      <div className="LoginCOntainer">
        <div className="login_form">
          <h1 className="LoginHeading">Log in</h1>
          <hr className="FirstLine" />
          {error && <Alert variant="danger">{error}</Alert>}

          <form 
            onSubmit={(e)=>{

              e.preventDefault()
              
              HandleLoginUser(user);
            }}
          >

          <div>
            <div className="form-group">
              <input
                type="email"
                className="email"
                placeholder="Email"
                onChange={(e) => setuser({ ...user, email: e.target.value })}
              />
              <br /> <br />
              <input
                type="password"
                className="email"
                placeholder="Password"
                onChange={(e) => setuser({ ...user, password: e.target.value })}
              />
                     <br /> <br />
            

            <select
              type="select"
              onChange={(e) =>
                setuser({ ...user, AccountType: e.target.value })
              }
              className="ChooseOne"
            >
              <option>Open this select menu</option>
              <option value="admin">Admin</option>
              <option value="company"> login as Company </option>
              <option value="student"> Login as Student </option>
            </select>
            </div>

            <p className="register-text">
              If you don't have an account register{" "}
              <Link to="/signup">here!</Link>
            </p>

            <Button
              type="submit"
              size="lg"
              className="submit-btn border-0 shadow-none"
            >
              Login
            </Button>
          </div>
          </form>

      </div>
    </div>
   </div>
  );
};

export default LoginForm;
