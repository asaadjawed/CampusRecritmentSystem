import React from 'react'

import { useState, useContext, useEffect, createContext } from 'react'
import { useHistory } from 'react-router'
import StudentProfile from '../Component/StudentDashboard/StudentProfile';

import {
  getAuth,
  getDatabase,
  ref,
  set,

} from "../firebase";
import Swal from 'sweetalert2';
import { child, Database, get, remove } from 'firebase/database';


const StudentContext = createContext();


const StudentProvider = ({ children }) => {

  const [jobsVacancies, setjobsVacancies] = useState([])
  const [ApplyToJob, setApplyToJob] = useState([])
   
//handleGenerateKey 
  const HandleGenerateUniqueKey = (EPNo, email) => {
    const emailKey = email.replace(".", "-");
    return EPNo + "-" + emailKey;
  };

//handle Profile Data of and set the Profile Data
  const handleProfileData = (StudentProfileData) => {
    const auth = getAuth();


    const UniqueKey = HandleGenerateUniqueKey(StudentProfileData.EPNO, StudentProfileData.Email)


    const dbStd = getDatabase();

    if (set(ref(dbStd, "StudentData/" + UniqueKey), {
      ...StudentProfileData,
      UniqueKey: UniqueKey,

    }

    ));


    {
      Swal.fire({
        icon: "success",
        title: "Data sent to Recruiter",
        text: "You can now apply for job",
      })

    }
  }


//Get the All Companies Job
  const dbGetJob = ref(getDatabase());
  const JobsGetData = ()=>{
      get(child(dbGetJob, "Jobs/"))
      .then((snapshot)=>{
        if(snapshot.exists()){
          console.log(snapshot.val(), 'snapshot');
          let JobArray = [];
          const jobsData = snapshot.val();

          for(let key in jobsData){
            JobArray.push({

              JobType: jobsData[key].JobType,
              Skills: jobsData[key].Skills,
              Shift: jobsData[key].Shift,
              Responsibility: jobsData[key].Responsibility,
              Requirements: jobsData[key].Requirements,
              JobUniqueKey: jobsData[key].JobUniqueKey,


            })
          }
          console.log(JobArray, "jobArray");
          setjobsVacancies(JobArray);
            
        };
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  const DeleteKey =(key)=>{

  console.log(key,"key");   
  remove(child(dbGetJob, `Jobs/${key}`))
  .then(()=>{
    Swal.fire({
      icon:"info",
      text:"Deleted"
    })
  })
 }




  //Student set info to apply for jobs and company get the applied students details

  const StudentSetInformation = (AppliedStudentInfo)=>{

    
    const AppliedKey = HandleGenerateAppliedKey(AppliedStudentInfo.Name, AppliedStudentInfo.Email)

    

    const dbStnApply = getDatabase();
    if( set(ref(dbStnApply, "AppliedStudents/" + AppliedKey),
       { 
        ...AppliedStudentInfo,
        AppliedKey: AppliedKey,

       }
    ))
  {
    Swal.fire({
      icon: "success",
      title: "Details Send To Company",
      text: "plz Wait For further Process",
    })
  }
}

  const HandleGenerateAppliedKey = (Name, Email) => {
    const emailKey = Email.replace(".", "-");
    return Name + "-" + emailKey;
  };







  return (
    <StudentContext.Provider
      value={{

        handleProfileData: handleProfileData,
        JobsGetData:JobsGetData,
        StudentSetInformation:StudentSetInformation,
        jobsVacancies:jobsVacancies,
        DeleteKey:DeleteKey,
      }}>
      {children}

    </StudentContext.Provider>
  )
}

export { StudentContext, StudentProvider }