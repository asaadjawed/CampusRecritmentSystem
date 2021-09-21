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
import { child, get } from 'firebase/database';


const StudentContext = createContext();


const StudentProvider = ({ children }) => {

  const [jobsVacancies, setjobsVacancies] = useState([])
   

  const HandleGenerateUniqueKey = (EPNo, email) => {
    const emailKey = email.replace(".", "-");
    return EPNo + "-" + emailKey;
  };


  const handleProfileData = (StudentProfileData) => {
    const auth = getAuth();


    const UniqueKey = HandleGenerateUniqueKey(StudentProfileData.EPNo, StudentProfileData.Email)


    const dbStd = getDatabase();

    if (set(ref(dbStd, "StudentData/" + UniqueKey), {
      ...StudentProfileData,
      UniqueKey: UniqueKey,

    }

    ));


    {
      Swal.fire({
        icon: "success",
        title: "Account Created",
        text: "You can now login",
      })

    }
  }



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
              Requirements: jobsData[key].Requirements


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


  return (
    <StudentContext.Provider
      value={{

        handleProfileData: handleProfileData,
        JobsGetData:JobsGetData,
        jobsVacancies:jobsVacancies,
      }}>
      {children}

    </StudentContext.Provider>
  )

}

export { StudentContext, StudentProvider }