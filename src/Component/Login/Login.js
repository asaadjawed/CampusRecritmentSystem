import React from 'react';
import { Button } from 'react-bootstrap';


const Login =()=>{



    return(
        <div>
  
        <div className="row">

        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h1 className="LoginHeading">Log in</h1>
              <hr className= "FirstLine"/>
              <div className="login_form">

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


        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          {/* <h1 onClick={()=>{setshowForm(!showForm)}} className="SignUpHeading">Create Account</h1> */}
          <hr className= "SecondLine"/>

          {/* <div value={showForm} style={{display:showForm ? 'block': 'none'}}  className="SignUp_form"> */}
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
    )
}

export default Login