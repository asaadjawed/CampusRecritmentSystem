import React from 'react';
import { Button }  from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserDetail = () => {
    return (
        <div className="container">

        <div className="row">

            <div className="col">
                <h1>
                    CAMPUS RECRUITMENT SYSTEM
                </h1>
            </div>


            <div className="col">

        <Link to='/StudentLogin'> <Button className="BtnStyle" variant="primary">Student portal</Button></Link>
           <Link to='/CompanyLogin'><Button  className="BtnStyle"  variant="primary">Company portal</Button></Link> 
          <Link to='/AdminLogin'> <Button  className="BtnStyle"  variant="primary">Admin portal</Button></Link> 

            </div>



            </div>




        </div>

    )
}
export default UserDetail