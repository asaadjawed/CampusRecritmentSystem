
import React, { useState, useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { StudentContext } from "../../Context/StudentContext";
const StudentProfile = () => {

  const { handleProfileData, error } = useContext(StudentContext)



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

  });

  return (
    <div className="Studentcontainer">
      <div>
        <h1 className="studentHeading">STUDENT PROFILE</h1>
        <Card className="ProfileCard">
          <Card.Body>
            <Card.Title>Student profile Form</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Application Form
            </Card.Subtitle>
            <Card.Text>
              in this Form Student should submit his details .So, Comapny
              Recruters approach to students
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <form

        onSubmit={(e) => {
          e.preventDefault();
          handleProfileData(state);
          console.log(handleProfileData(state))

        }}

      >





        <div className="Profilecontainer">
          <div className="ProfileForm">
            <div className="formAligndiv">
              EPNo:{" "}
              <input
                type="number"
                className="email"
                placeholder="EPNO"
                value={state.EPNO}
                onChange={(e) => setState({ ...state, EPNO: e.target.value })}
              />{" "}
              <br /> <br />
              FirstName:{" "}
              <input
                type="text"
                className="email"
                placeholder="FirstName"
                value={state.FirstName}
                onChange={(e) =>
                  setState({
                    ...state,
                    FirstName: e.target.value,
                  })
                }
              />{" "}
              <br /> <br />
              LastName:{" "}
              <input
                type="text"
                className="email"
                placeholder="LastName"
                value={state.LastName}
                onChange={(e) => setState({ ...state, LastName: e.target.value })}
              />{" "}
              <br /> <br />
              Email:{" "}
              <input
                type="email"
                className="email"
                placeholder="Email"
                value={state.Email}
                onChange={(e) => setState({ ...state, Email: e.target.value })}
              />{" "}
              <br /> <br />
              Address:{" "}
              <input
                type="text"
                className="email"
                placeholder="FirstName"
                value={state.Address}
                onChange={(e) => setState({ ...state, Address: e.target.value })}
              />{" "}
              <br /> <br />
              Education :{" "}
              <input
                type="text"
                className="email"
                placeholder="Education"
                value={state.Education}
                onChange={(e) =>
                  setState({ ...state, Education: e.target.value })
                }
              />{" "}
              <br /> <br />
              UniversityName :{" "}
              <input
                type="text"
                className="email"
                placeholder="University Name"
                value={state.UniversityName}
                onChange={(e) =>
                  setState({ ...state, UniversityName: e.target.value })
                }
              />{" "}
              <br /> <br />
              CGPA:{" "}
              <input
                type="number"
                className="email"
                placeholder="CGPA"
                value={state.CGPA}
                onChange={(e) => setState({ ...state, CGPA: e.target.value })}
              />{" "}
              <br /> <br />
              Skills:{" "}
              <input
                type="text"
                className="email"
                placeholder="Skills"
                value={state.Skills}
                onChange={(e) => setState({ ...state, Skills: e.target.value })}
              />{" "}
              <br /> <br />
              <Button type="submit">Submit</Button>
              <Button>View Form</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;

//     const handleSubmit =()=>{

//         const db = database;
//         setData(refer(db, 'students/' + state.EPNO + state.Email),
//         state);
//     }

//     const ViewForm =()=>{
//         <div>
//             <div>
//                 <h1></h1>
//             </div>
//         </div>
//     }

//     return (

//

//     )
// }

// export default StudentDashboard
