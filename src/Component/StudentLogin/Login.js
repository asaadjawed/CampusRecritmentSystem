import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const StudentLogin =()=>{

const [showStudentForm ,setshowStudentForm] = useState(false)

    return(
        <div>
  
        <div className="row">

        <div className="col login_form">
              <h1 className="LoginHeading">Student Log in</h1>
              <hr className= "FirstLine"/>

              <div>

              <div className="form-group">
                <input type="email" className="email" placeholder="Email" /> <br /> <br />
                <input type="password" className="email" placeholder="Password" />
              </div>

              <input type="checkbox" className="Check" defaultValue="checkbox" /> 
              <label className="Remember">Remember Me</label>


              <button type="Login" className="btn">Login</button>
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
          <input type="email" className="email" placeholder="Email" /><br /> <br />
                <input type="password" className="email" placeholder="Password" /> <br /> <br />
                <input type="number" className="email" placeholder="Contact No" />
                <button type="Account" className="btn3">Create Account</button>
              </div>
        </div>
        </div>
    </div>
    </div>
  
    )
}

export default StudentLogin