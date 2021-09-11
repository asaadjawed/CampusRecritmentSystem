import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../Header/Header";
import "../Header/style.css";

import "../Auth/auth.css";



import { database } from '../../firebase'
import { refer } from '../../firebase'
import { setData } from '../../firebase'


const Signup = (props) => {
  // const [showStudentForm ,setshowStudentForm] = useState(false);

const [state, setState] = useState({

    FirstName: "",
    LastName: "",
    Email: "",
    Pass: "",
    Select: "",


})


  const history = useHistory();
  //for signup student
  const [studentSignupEmail, setstudentSignupEmail] = useState(" ");
  const [studentsignUpPass, setstudentsignUpPass] = useState(" ");

  // const [companyDash, setcompanyDash] = useState(" ")

  const handleSignUp = async () => {


    // console.log(state)
    // const db = database;
    // setData(refer(db, 'students/' + state.Select + state.FirstName),
    // state);

    createUserWithEmailAndPassword(auth, state.Email, state.Pass)
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
          <input type="text" className="email"  placeholder="First Name" value={state.FirstName} onChange={(e)=>{setState({
            ...state,
            FirstName: e.target.value
          })}} />
          <br /> <br />
          <input type="text" className="email" placeholder="Last Name" value={state.LastName} onChange={(e)=>{setState({
            ...state,
            LastName : e.target.value
          })}} />
          <br /> <br />
          <input
            type="email"
            className="email"
            placeholder="Email"
            value={state.Email}
            onChange={(e) => setState({
              ...state,
              Email: e.target.value
            })}
            />
          <br /> <br />
          <input
            type="password"
            className="email"
            placeholder="Password"
            value={state.Pass}
            onChange={(e) => setState({
              ...state,
             Pass: e.target.value
             })}
          />
             <br /> <br />
          <select type="select" value={state.Select} onChange={(e)=>setState({
            ...state,
           Select: e.target.value
          })}
           className="ChooseOne">
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
