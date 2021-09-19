import { Database } from 'firebase/database';
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


 const StudentContext =createContext();


  const StudentProvider =({children})=>{

    const HandleGenerateUniqueKey = (EPNo, email) => {
        const emailKey = email.replace(".", "-");
        return EPNo + "-" + emailKey;
      };


    const handleProfileData=(StudentProfileData)=>{
        const auth = getAuth();


        const UniqueKey = HandleGenerateUniqueKey(StudentProfileData.EPNO, StudentProfileData.Email)
        

        const dbStd = getDatabase()

        set(ref(dbStd, "StudentData/" + UniqueKey),{
            ...StudentProfileData,
            UniqueKey: UniqueKey,

        }
      
        )}

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