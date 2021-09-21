
import React, { useState, createContext, } from "react";
import { useHistory } from "react-router-dom";

import {
    getAuth,
    set,
    getDatabase,
    child,
    get,
    ref,
} from "../firebase";


const CompanyContext = createContext();

const CompanyProvider = ({ children }) => {

    const [companiesData, setCompanies] = useState([])


    const dbcompany = ref(getDatabase());

    const ViewProfileData = () => {

        get(child(dbcompany, 'StudentData/'))
            .then((snapshot) => {
                const arr = [];
                if (snapshot.exists()) {
                    console.log(snapshot.val(), 'snapshot');
                    const data = snapshot.val();
                    for (let key in data) {
                        arr.push({
                            EPNO: data[key].EPNO,
                            FirstName: data[key].FirstName,
                            LastName: data[key].LastName,
                            Email: data[key].Email,
                            Address: data[key].Address,
                            Education: data[key].Education,
                            UniversityName: data[key].UniversityName,
                            CGPA: data[key].CGPA,
                            Skills: data[key].Skills,
         


                        })
                    }
                    // arr.push(snapshot.val());
                    console.log(arr, 'arr')
                    setCompanies(arr)
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handlekey = (JobType, Skills)=>{
        return JobType + "-" + Skills
    }

    const dbJob = getDatabase();

    const JobsSetData =(StudentApplication)=>{

        console.log(StudentApplication);

        const JobUniqueKey  = handlekey(StudentApplication.JobType, StudentApplication.Skills)

        if(set(ref(dbJob, "Jobs/" + JobUniqueKey),{

            ...StudentApplication,
            JobUniqueKey: JobUniqueKey,

        }
        ));

    }





    return (
        <CompanyContext.Provider value={{
            ViewProfileData: ViewProfileData,
            JobsSetData:JobsSetData,
            companiesData: companiesData,
        }}>
            {children}

        </CompanyContext.Provider>
    )


}

export { CompanyProvider, CompanyContext }
