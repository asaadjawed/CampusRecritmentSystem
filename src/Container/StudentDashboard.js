import React, { useContext } from 'react';
import '../Component/StudentDashboard/StudentDashboard.css'
import StudentNav from '../Component/StudentDashboard/StudentNav';
import { GlobalContext } from '../Context/GlobalContext';
import AddProfile from './StudentProfile';
import ApplyForJob from './ApplyForJob';
import StudentViewVacancy from './StudentViewVacancy';

import { Route, Switch } from "react-router-dom";
import LoginForm from '../Component/Auth/Login';




const StudentDashboardPage = () => {

    const { userData } = useContext(GlobalContext)
    console.log(userData, 'US')


    return (
        <>


          
            {userData.AccountType === "student" ? (
                <>
             <StudentNav />    
                    <Switch>
                        <Route path="/StudentDashboard/addProfile" component={AddProfile} />
                        <Route  path="/StudentDashboard/ApplyStdnInfo" component={ApplyForJob} />
                        <Route  path="/StudentDashboard/ViewAvailableJobs" component={StudentViewVacancy} />
                    </Switch>

                </>
            ) : (

                <>
                    <LoginForm />
                </>
            )

            }



        </>

    )
}

export default StudentDashboardPage