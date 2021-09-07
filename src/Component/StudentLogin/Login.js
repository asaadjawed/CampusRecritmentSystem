import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";







const StudentLogin =()=>{

const [showStudentForm ,setshowStudentForm] = useState(false);

//for signin student
const [studentLogInEmail, setstudentLogInEmail] = useState(" ");
const [studentPass, setstudentPass] = useState(" ");


//for signup student
const [studentSignupEmail, setstudentSignupEmail] = useState(" ");
const [studentsignUpPass, setstudentsignUpPass] = useState(" ");

//for history push

const history = useHistory();


  const handleSignIn = async () => {
      signInWithEmailAndPassword(auth, studentLogInEmail, studentPass).then(res =>{

          history.push()

      }).catch(err =>{

        "Errror found In SignIn authentication"
      })
  }


  const signUp =() => {
    return(

      auth.createUserWithEmailAndPassword(studentSignupEmail, studentsignUpPass).then(res =>{

      }).catch(err =>{
        "Error found In Signup authentication"
      })
      
    )
  }


    return(
        <div>
  
        <div className="row">

        <div className="col login_form">
              <h1 className="LoginHeading">Student Log in</h1>
              <hr className= "FirstLine"/>

              <div>

              <div className="form-group">
                <input type="email"  className="email" placeholder="Email" value={studentLogInEmail} onChange={ e  => setstudentLogInEmail (e.target.value)} /> <br /> <br />
                <input type="password" className="email" placeholder="Password" value={studentPass} onChange={ e => setstudentPass( e.target.value)} />
              </div>

              <input type="checkbox" className="Check" defaultValue="checkbox" /> 
              <label className="Remember">Remember Me</label>


              <Button type="Login" onClick={handleSignIn} className="btn">Login</Button>
              <br />
              <a href="#" className="forget">Forget Password?</a>
              </div>
        </div>


        <div className="col SignUp_form">
          <h1 onClick={()=>{setshowStudentForm(!showStudentForm)}} className="SignUpHeading">Create Account</h1>

          <hr className= "SecondLine"/>

          <div value={showStudentForm} style={{display:showStudentForm ? 'block': 'none'}}  >

          <div className="form-group">
          <input type="text" className="email" placeholder="First Name" /><br /> <br />
          <input type="text" className="email" placeholder="Last Name" /><br /> <br />
          <input type="email" className="email" placeholder="Email" value={studentSignupEmail} onChange={e => setstudentSignupEmail(e.target.value)}  /><br /> <br />
                <input type="password" className="email" placeholder="Password" value={studentsignUpPass} onChange={ e=> setstudentsignUpPass(e.target.value)} /> <br /> <br />
                <input type="number" className="email" placeholder="Contact No" />
                <Button type="Account" className="btn3">Create Account</Button>
              </div>
        </div>
        </div>
    </div>
    </div>
  
    )
}

export default StudentLogin