import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const CompanyLogin = () => {



  const [showCompanyForm, setshowCompanyForm] = useState(false);

  //for signin student
  const [CompanyLogInEmail, setCompanyLogInEmail] = useState(" ");
  const [companyPass, setcompanyPass] = useState(" ");


  //for signup student
  const [companySignupEmail, setstudentSignupEmail] = useState(" ");
  const [companysignUpPass, setstudentsignUpPass] = useState(" ");

  //for history push

  const history = useHistory();


  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, CompanyLogInEmail, companyPass).then(res => {

      history.push('/CompanyDashboard')

    }).catch(err => {

      "Errror found In SignIn authentication"
    })
  }


  const handleSignUp = async () => {

    createUserWithEmailAndPassword(auth, companySignupEmail, companysignUpPass).then(res => {

      history.push()

    }).catch(err => {
      "Error found In Signup authentication"
    })

  }


  return (
    <div>

      <div className="row">

        <div className="col login_form">
          <h1 className="LoginHeading">Company Log in</h1>
          <hr className="FirstLine" />
          <div>

            <div className="form-group">
              <input type="email" className="email" placeholder="Email" value={CompanyLogInEmail} onChange={e => setCompanyLogInEmail(e.target.value)} /> <br /> <br />
              <input type="password" className="email" placeholder="Password" value={companyPass} onChange={e => setcompanyPass(e.target.value)} />
            </div>

            <input type="checkbox" className="Check" defaultValue="checkbox" />
            <label className="Remember">Remember Me</label>


            <Button type="Login" onClick={handleSignIn} className="btn">Login</Button>
            <br />
            <a href="#" className="forget">Forget Password?</a>
          </div>
        </div>


        <div className="col SignUp_form">
          <h1 onClick={() => { setshowCompanyForm(!showCompanyForm) }} className="SignUpHeading">Create Account</h1>
          <h1 className="AllversionText">Company SignUp</h1>
          <hr className="SecondLine" />

          <div value={showCompanyForm} style={{ display: showCompanyForm ? 'block' : 'none' }}>
            <div className="form-group">
              <input type="text" className="email" placeholder="First Name" /><br /> <br />
              <input type="text" className="email" placeholder="Last Name" /><br /> <br />
              <input type="email" className="email" placeholder="Email" value={companySignupEmail} onChange={(e)=>{setstudentSignupEmail(e.target.value)}} /><br /> <br />
              <input type="password" className="email" placeholder="Password" value={companysignUpPass} oncha /> <br /> <br />
              <input type="number" className="email" placeholder="Contact No" />
              <button type="Account" onClick={handleSignUp} className="btn3">Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CompanyLogin