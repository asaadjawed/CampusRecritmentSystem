import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from '../Header/Header';
import '../Header/style.css';

import '../Auth/auth.css';







const StudentLogin =(props)=>{

// const [showStudentForm ,setshowStudentForm] = useState(false);

//for signin student
const [studentLogInEmail, setstudentLogInEmail] = useState(" ");
const [studentPass, setstudentPass] = useState(" ");


const [companyDash, setcompanyDash] = useState(" ");
//for history push

const history = useHistory();


  const handleSignIn = async () => {
      signInWithEmailAndPassword(auth, studentLogInEmail, studentPass).then(res =>{

          history.push('/StudentDashboard')
          console.log(res);

      }).catch(err =>{

        "Errror found In SignIn authentication"
      })
  }





    return(


        <div>
          <Header />
  
        <div>

        <div className="login_form">
              <h1 className="LoginHeading">Log in</h1>
              <hr className= "FirstLine"/>

              <div>

              <div className="form-group">
                <input type="email"  className="email" placeholder="Email" value={studentLogInEmail} onChange={ e  => setstudentLogInEmail (e.target.value)} /> <br /> <br />
                <input type="password" className="email" placeholder="Password" value={studentPass} onChange={ e => setstudentPass( e.target.value)} />
              </div>

              <input type="checkbox" className="Check" defaultValue="checkbox" /> 
              <select type="select" value={companyDash} onChange={(e)=>setcompanyDash(e.target.value)} className="ChooseOne">
            <option value="company"> Register as Company </option>
            <option value="student"> Register as Student </option>
          </select>

              <label className="Remember">Remember Me</label>
           

        <div className="AllBtn">
              <Button type="Login" onClick={handleSignIn} className="btn">Login</Button>
              <Button onClick={props.handleToggle} className="btn"> SignUp </Button>
              </div>
          
              <br />
              <a href="#" className="forget">Forget Password?</a>
              



              </div>
        </div>
    </div>
    </div>
  
    )
}

export default StudentLogin