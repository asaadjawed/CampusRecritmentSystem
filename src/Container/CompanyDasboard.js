import React, {useContext} from 'react';
import CompanyNav from '../Component/CompanyDashBoard/CompanyNav';
import '../Component/CompanyDashBoard/CompanyDashboard.css'
import { GlobalContext } from '../Context/GlobalContext';
import { Switch, Route } from 'react-router-dom';
import CompanyViewApp from './CompanyProfile';
import CompanyJobCreation from './JobPost';
import StudentAppliedCandidate from './StudentAppliedCandiate';
import LoginForm from '../Component/Auth/Login';



const CompanyDashBoardPage =()=>{

    const {userData} = useContext(GlobalContext)

    return(
<>
        {userData.AccountType==="company" ? (
            <>
            <CompanyNav />

            <Switch>
                <Route path="/CompanyDashboard/StudentsResume" component={CompanyViewApp} />
                <Route path="/CompanyDashboard/JobPost" component={CompanyJobCreation} />
                <Route path="/CompanyDashboard/AppliedCandidate" component={StudentAppliedCandidate} />
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
export default CompanyDashBoardPage