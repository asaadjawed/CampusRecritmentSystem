import React from 'react'
import { Link } from 'react-router-dom'


const AdminDashboard = () => {
    return (
        <>
            <div className="container">
                <nav className="NavClassCompany">
                    <div>
                        <h1>Admin DashBoard</h1>
                    </div>
                    <div className="Nav_Item_Company">
                        <button>Companies Info</button>
                        <button>Student Info</button>   
                        <button> LogOut </button>
                    </div>
                </nav>
            </div>


        </>
    )
}
export default AdminDashboard