import React, { useState } from 'react'
import StudentLogin from '../Component/Auth/Login'
import Signup from '../Component/Auth/Signup'
// import '../Component/Auth/auth.css'

const StudentLoginForm =()=>{

    const [showLogin, setshowLogin] = useState(true)

    const handleToggle =(e)=>{
        e.preventDefault()
        setshowLogin(!showLogin)
    }

return(
   <div>
    {showLogin?<StudentLogin handleToggle={handleToggle} /> : <Signup handleToggle={handleToggle} />}
    </div>
);
}

export default StudentLoginForm