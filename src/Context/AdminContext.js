
import React, { useState, createContext, } from "react";

import {
    getAuth,
    set,
    getDatabase,
    child,
    get,
    ref,
} from "../firebase";


const AdminContext = createContext();

const AdminProvider = ({children})=>{

    const [AdminCompanyViewData, setAdminCompanyViewData] = useState([])


    const dbcompany = ref(getDatabase());

    const AdminViewStudentProfileData = async () => {
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
                    })
                }
                setAdminCompanyViewData(arr)
            }
        } catch (error) {
            throw error
        }
}

return (
    <AdminContext.Provider value={{
        AdminViewStudentProfileData: AdminViewStudentProfileData,
        AdminCompanyViewData: AdminCompanyViewData,
    }}>
        {children}

    </AdminContext.Provider>
)


}

export { AdminProvider, AdminContext }


