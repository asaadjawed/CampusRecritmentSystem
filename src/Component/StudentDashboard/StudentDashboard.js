import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

import { database } from '../../firebase'
import { refer } from '../../firebase'
import { setData } from '../../firebase'
 




const StudentDashboard = () => {

    const [state, setState] = useState({
        EPNO: "",
        FirstName: "",
        LastName: "",
        Email: "",
        Address: "",
        Education: "",
        UniversityName: "",
        CGPA: "",
        Skills: "",

    })


    const handleSubmit =()=>{
        
        const db = database;
        setData(refer(db, 'students/' + state.Email+ state.EPNO),
        state);
    }

    const ViewForm =()=>{
        <div>
            <div>
                <h1></h1>
            </div>
        </div>
    }

 
   

    return (

        <div className="container">


            <div>
                <h1>STUDENT PROFILE</h1>

                <Card className="ProfileCard">
                    <Card.Body>
                        <Card.Title>Student profile Form</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Application Form</Card.Subtitle>
                        <Card.Text>
                            in this Form Student should submit his details .So, Comapny Recruters approach to students
                        </Card.Text>
                        <Button className="btn">Add profile</Button>

                    </Card.Body>
                </Card>


            </div>


            <div className="container">

                <div className="ProfileForm">

                    <div>
                    EPNo: <input type="text" className="email" placeholder="FirstName" value={state.EPNO} onChange={e => setState({...state, EPNO: e.target.value})} /> <br /> <br />
                        FirstName:   <input type="text" className="email" placeholder="FirstName" value={state.FirstName} onChange={e => setState({
                            ...state,
                            FirstName: e.target.value
                        })} /> <br /> <br />
                        LastName: <input type="text" className="email" placeholder="FirstName" value={state.LastName} onChange={e => setState({...state, LastName: e.target.value})} /> <br /> <br />
                        Email: <input type="text" className="email" placeholder="FirstName" value={state.Email} onChange={e => setState({...state, Email: e.target.value})} /> <br /> <br />
                        Address:  <input type="text" className="email" placeholder="FirstName" value={state.Address} onChange={e => setState({...state, Address: e.target.value})} /> <br /> <br />
                        Education :  <input type="text" className="email" placeholder="FirstName" value={state.Education} onChange={e => setState({...state, Education: e.target.value})} /> <br /> <br />
                        UniversityName : <input type="text" className="email" placeholder="FirstName" value={state.UniversityName} onChange={e => setState({...state, UniversityName: e.target.value})} /> <br /> <br />
                        CGPA: <input type="text" className="email" placeholder="FirstName" value={state.CGPA} onChange={e => setState({...state, CGPA: e.target.value})} /> <br /> <br /> 
                        Skills:  <input type="text" className="email" placeholder="FirstName" value={state.Skills} onChange={e => setState({...state, Skills: e.target.value})} /> <br /> <br />

                        <Button onClick={handleSubmit} >Submit</Button>
                        <Button onClick={ViewForm} >View Form</Button>
                    </div>
                </div>

            </div>

            {/* <div className='row'>
                <div className="col-lg-4 aligncard">
                    <h1>Vacancy For Students</h1>

                    <Card style={{ border: '2px solid black' }}>
                        <Card.Body>
                            <Card.Title>Student profile Form</Card.Title>title>
                            <Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Application Form</Card.Sub
                                in this Form Student should submit his details .So, Comapny Recruters approach to students 
                            </Card.Text>
                            <Card.Link href="#">Fill a Form</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>


                </div>

                <div className="col-lg-4 aligncard">
          

                    <Card style={{ border: '2px solid black' }}>
                        <Card.Body>
                            <Card.Title>Student profile Form</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Application Form</Card.Subtitle>
                            <Card.Text>
                                in this Form Student should submit his details .So, Comapny Recruters approach to students 
                            </Card.Text>
                            <Card.Link href="#">Fill a Form</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>


                </div>

                <div className="col-lg-4 aligncard">
                    

                    <Card style={{ border: '2px solid black' }}>
                        <Card.Body>
                            <Card.Title>Student profile Form</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Application Form</Card.Subtitle>
                            <Card.Text>
                                in this Form Student should submit his details .So, Comapny Recruters approach to students 
                            </Card.Text>
                            <Card.Link href="#">Fill a Form</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>


                </div>


            </div> */}

        </div>



    )
}

export default StudentDashboard