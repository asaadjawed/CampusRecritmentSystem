import React, { useContext}from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from "../../Context/GlobalContext";


const AdminDashboard = () => {
    const {handleLogout} = useContext(GlobalContext)
    return (
        <>
            <div className="container">
                <nav className="NavClassCompany">
                    <div>
                        <h1>Admin DashBoard</h1>
                    </div>
                    <div className="Nav_Item_Company">
                        <Link to="/AdminProfile"> <button>Student Info</button></Link>
                        <Link to="/AdminCmpnyViewData" ><button >Companies Info</button>   </Link> 
                        <button onClick={handleLogout} > LogOut </button>
                    </div>
                </nav>
            </div>


        </>
    )
}
export default AdminDashboard