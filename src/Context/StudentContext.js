import { Database } from 'firebase/database';
import React from 'react'

import { useState, useContext, useEffect, createContext } from 'react'
import { useHistory } from 'react-router'

import {
    getAuth,
    getDatabase,
    ref,
    set,

  } from "../firebase";


  const StudentContext =createContext();


  const StudentProvider =({children})=>{


    const handleProfileData=(StudentProfileData)=>{
        const auth = getAuth();

        const dbStd = getDatabase()

        set(ref(dbStd, "StudentData/"),{
            ...StudentProfileData,

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