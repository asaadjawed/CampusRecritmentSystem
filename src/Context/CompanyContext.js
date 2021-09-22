
import React, { useState, createContext, } from "react";

import {
    getAuth,
    set,
    getDatabase,
    child,
    get,
    ref,
    remove,
} from "../firebase";


const CompanyContext = createContext();

const CompanyProvider = ({ children }) => {

    const [companiesData, setCompanies] = useState([])


    const dbcompany = ref(getDatabase());
    const db = ref(getDatabase());

    const ViewProfileData = async () => {
        const arr = [];
        try {
            const snapshot = await get(child(dbcompany, 'StudentData/'))
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
                        UniqueKey: data[key].UniqueKey,
                    })
                }
                setCompanies(arr)
            }
        } catch (error) {
            throw error
        }

    }

    ///Delete a key 
    const DeleteKey = (key) => {
        console.log(key, "use")
        // debugger
        remove(child(dbcompany, `StudentData/${key}`))
    }



    const handlekey = (JobType, Skills) => {
        return JobType + "-" + Skills
    }



    ///////////////////////////////////
    const dbJob = getDatabase();

    const JobsSetData = (StudentApplication) => {

        console.log(StudentApplication);

        const JobUniqueKey = handlekey(StudentApplication.JobType, StudentApplication.Skills)

        if (set(ref(dbJob, "Jobs/" + JobUniqueKey), {

            ...StudentApplication,
            JobUniqueKey: JobUniqueKey,

        }
        ));

    }





    return (
        <CompanyContext.Provider value={{
            ViewProfileData: ViewProfileData,
            JobsSetData: JobsSetData,
            companiesData: companiesData,
            DeleteKey: DeleteKey,
        }}>
            {children}

        </CompanyContext.Provider>
    )


}

export { CompanyProvider, CompanyContext }
