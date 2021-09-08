import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Switch } from 'react-router-dom'




import StudentLoginForm from './Container/Login';
import UserDetailPage from './Container/UserDetail';
import CompanyLoginForm from './Container/Company';
import AdminLoginForm from './Container/Admin';
import StudentDashboardPage from './Container/StudentDashboard';
import CompanyDashboardPage from './Component/CompanyDashboard/CompanyDashboard';

const App =()=> {
  return (

<>

    <BrowserRouter>

    <Switch>

   <Route exact path='/' component={UserDetailPage} />
     
    <Route path='/StudentLogin' component={StudentLoginForm} />

    <Route path='/CompanyLogin' component={CompanyLoginForm} />

    <Route path ='/AdminLogin' component={AdminLoginForm} />
    <Route path='/StudentDashboard' component={StudentDashboardPage} />
    <Route path='/CompanyDashboard'  component={CompanyDashboardPage}/>

     </Switch>
     </BrowserRouter>

</>
   
      
     
   
  
  );
}

export default App;
