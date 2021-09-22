
// import React, { useState, createContext, } from "react";

// import {
//     getAuth,
//     set,
//     getDatabase,
//     child,
//     get,
//     ref,
// } from "../firebase";


// const AdminContext = createContext();

// const AdminProvider = ({ children }) => {


// ///Student Data Get by Admin

//     const [AdminCompanyViewData, setAdminCompanyViewData] = useState([])


//     const dbcompany = ref(getDatabase());

//     const AdminViewStudentProfileData = async () => {
//         const arr = [];
//         try {
//             const snapshot = await get(child(dbcompany, 'StudentData/'))
//             if (snapshot.exists()) {
//                 console.log(snapshot.val(), 'snapshot');
//                 const data = snapshot.val();
//                 for (let key in data) {
//                     arr.push({
//                         EPNO: data[key].EPNO,
//                         FirstName: data[key].FirstName,
//                         LastName: data[key].LastName,
//                         Email: data[key].Email,
//                         Address: data[key].Address,
//                         Education: data[key].Education,
//                         UniversityName: data[key].UniversityName,
//                         CGPA: data[key].CGPA,
//                         Skills: data[key].Skills,
//                     })
//                 }
//                 setAdminCompanyViewData(arr)
//             }
//         } catch (error) {
//             throw error
//         }
//     }


//     //Company Job Data get by admin
//     const [jobsVacancies, setjobsVacancies] = useState([])

//     const dbGetJob = ref(getDatabase());
//     const JobsGetData = () => {
//         get(child(dbGetJob, "Jobs/"))
//             .then((snapshot) => {
//                 if (snapshot.exists()) {
//                     console.log(snapshot.val(), 'snapshot');
//                     let JobArray = [];
//                     const jobsData = snapshot.val();

//                     for (let key in jobsData) {
//                         JobArray.push({

//                             JobType: jobsData[key].JobType,
//                             Skills: jobsData[key].Skills,
//                             Shift: jobsData[key].Shift,
//                             Responsibility: jobsData[key].Responsibility,
//                             Requirements: jobsData[key].Requirements


//                         })
//                     }
//                     console.log(JobArray, "jobArray");
//                     setjobsVacancies(JobArray);

//                 };
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     const DeletePost =()=>{

//     }

//     return (
//         <AdminContext.Provider value={{
//             AdminViewStudentProfileData: AdminViewStudentProfileData,
//             AdminCompanyViewData: AdminCompanyViewData,
//             JobsGetData: JobsGetData,
//             jobsVacancies:jobsVacancies
//         }}>
//             {children}

//         </AdminContext.Provider>
//     )


// }

// export { AdminProvider, AdminContext }


