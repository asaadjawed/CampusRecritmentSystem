
import React, { useState, createContext, } from "react";
import { useHistory } from "react-router-dom";

import {

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
                            Address: data[key].FirstName,
                            CGPA: data[key].LastName,
                            EPNO: data[key].EPNO,
                            Education: data[key].Education,
                            Email: data[key].Email,
                            FirstName: data[key].Address,
                            LastName: data[key].CGPA,
                            Skills: data[key].Skills,
                            UniversityName: data[key].UniversityName,


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
    return (
        <CompanyContext.Provider value={{
            ViewProfileData: ViewProfileData,
            companiesData: companiesData,
        }}>
            {children}

        </CompanyContext.Provider>
    )


}

export { CompanyProvider, CompanyContext }
