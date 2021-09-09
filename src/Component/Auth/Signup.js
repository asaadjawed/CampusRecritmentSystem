import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../Header/Header";
import "../Header/style.css";

import "../Auth/auth.css";

const Signup = (props) => {
  // const [showStudentForm ,setshowStudentForm] = useState(false);

  const history = useHistory();
  //for signup student
  const [studentSignupEmail, setstudentSignupEmail] = useState(" ");
  const [studentsignUpPass, setstudentsignUpPass] = useState(" ");

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, studentSignupEmail, studentsignUpPass)
      .then((res) => {
        history.push('/');
      })
      .catch((err) => {
        "Error found In Signup authentication";
      });
  };
  return (
    <>
      <Header />

      <div className="SignUp_form">
        <h1
          // onClick={() => {
          //   setshowStudentForm(!showStudentForm);
          // }}
          className="SignUpHeading"
        >
          Create Account
        </h1>

        <hr className="SecondLine" />

        {/* <div
          value={showStudentForm}
          style={{ display: showStudentForm ? "block" : "none" }}
        > */}
        <div className="form-group">
          <input type="text" className="email" placeholder="First Name" />
          <br /> <br />
          <input type="text" className="email" placeholder="Last Name" />
          <br /> <br />
          <input
            type="email"
            className="email"
            placeholder="Email"
            value={studentSignupEmail}
            onChange={(e) => setstudentSignupEmail(e.target.value)}
          />
          <br /> <br />
          <input
            type="password"
            className="email"
            placeholder="Password"
            value={studentsignUpPass}
            onChange={(e) => setstudentsignUpPass(e.target.value)}
          />{" "}
          <br /> <br />
          <select type="select" onChange={(e)=>(e.target.value)} className="ChooseOne">
            <option value="company"> Register as Company </option>
            <option value="student"> Register as Student </option>
          </select>

          {/* {type === "company" ? (
            <>

            </>
          ): null} */}

          <div className="AllBtn">
            <Button type="Account" onClick={handleSignUp} className="btn3">
              Register
            </Button>
            <Button onClick={props.handleToggle} className="btn">
              {" "}
              LogIn{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
