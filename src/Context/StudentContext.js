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


 const StudentContext =createContext();


  const StudentProvider =({children})=>{

    const HandleGenerateUniqueKey = (EPNo, email) => {
        const emailKey = email.replace(".", "-");
        return EPNo + "-" + emailKey;
      };


    const handleProfileData=(StudentProfileData)=>{
        const auth = getAuth();


        const UniqueKey = HandleGenerateUniqueKey(StudentProfileData.EPNO, StudentProfileData.Email)
        

        const dbStd = getDatabase();

       if( set(ref(dbStd, "StudentData/" + UniqueKey),{
            ...StudentProfileData,
            UniqueKey: UniqueKey,

        }
      
        ));

       
{Swal.fire({
    icon: "success",
    title: "Account Created",
    text: "You can now login",
  })

}
    }
        

    return(
        <StudentContext.Provider 
        value={{

            handleProfileData:handleProfileData,
        }}>
            {children}
        
        </StudentContext.Provider>
    )

  }

  export {StudentContext, StudentProvider}