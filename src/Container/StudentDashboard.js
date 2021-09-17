import React from 'react';
import StudentProfile from '../Component/StudentDashboard/StudentProfile';
import '../Component/StudentDashboard/StudentDashboard.css'
import StudentNav from '../Component/StudentDashboard/StudentNav';



const StudentDashboardPage =()=>{
    return(
        <>
            
         
            <StudentNav />
         <StudentProfile />
            </>
    )
}

export default StudentDashboardPage