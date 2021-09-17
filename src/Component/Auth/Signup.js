import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "../Header/Header";
import "../Header/style.css";

import "../Auth/auth.css";

import { GlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
// import { Alert } from "react-bootstrap";

const Signup = () => {
  const {handleSignupUser, error} = useContext(GlobalContext);
  const [user, setuser] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Pass: "",
    AccountType: "",
  });

  return (
    <div>
      <Header />

    <div className="SignUPcontainer">
      <div className="SignUp_form">
        <h1
          className="SignUpHeading"
        >
          Create Account
        </h1>

        {error && <p variant="danger">{error}</p>}


        <form 
            onSubmit={(e)=>{
              e.preventDefault()
              handleSignupUser(user);
            }}
          >

        <hr className="SecondLine" />

        <div className="form-group">
          <input
            type="text"
            className="email"
            placeholder="First Name"
            value={user.FirstName}
            onChange={(e) => {
              setuser({
                ...user,
                FirstName: e.target.value,
              });
            }}
          />
          <br /> <br />
          <input
            type="text"
            className="email"
            placeholder="Last Name"
            value={user.LastName}
            onChange={(e) => {
              setuser({
                ...user,
                LastName: e.target.value,
              });
            }}
          />
          <br /> <br />
          <input
            type="email"
            className="email"
            placeholder="Email"
            value={user.Email}
            onChange={(e) =>
              setuser({
                ...user,
                Email: e.target.value,
              })
            }
          />
          <br /> <br />
          <input
            type="password"
            className="email"
            placeholder="Password"
            value={user.Pass}
            onChange={(e) =>
              setuser({
                ...user,
                Pass: e.target.value,
              })
            }
          />
          <br /> <br />
          <select
            type="select"
            value={user.AccountType}
            onChange={(e) =>
              setuser({
                ...user,
                AccountType: e.target.value,
              })
            }
            className="ChooseOne"
          > 
            <option>Open this select menu</option>
            <option value="company"> Register as Company </option>
            <option value="student"> Register as Student </option>
          </select>


          <p className="register-text">
              If you don't have an account register{" "}
              <Link to="/">here!</Link>
            </p>

          <Button
              type="submit"
              size="lg"
              className="submit-btn"
            >
              Submit
            </Button>
      
        </div>
      </form>
      </div>
      </div>
      </div>
  
  );
};

export default Signup;
