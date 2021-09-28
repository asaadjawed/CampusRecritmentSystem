import react, { useContext } from "react";
import AdminNav from "../Component/AdminDashboard/AdminNav";
import "../Component/AdminDashboard/AdminDashboard.css";
import { GlobalContext } from "../Context/GlobalContext";
import { Switch, Route } from "react-router-dom";
import LoginForm from "../Component/Auth/Login";
import AdminProfilePage from "./AdminProfile";
import AdminCmpnyPage from "./AdminCmpnyPage";

const AdminDashboardPage = () => {
  const { userData } = useContext(GlobalContext);

  return (
    <>
      {userData.AccountType === "admin" ? (
        <>
          <AdminNav />

          <Switch>
            <Route path="/AdminDashboard/AdminProfile" component={AdminProfilePage} />
            <Route path="/AdminDashboard/AdminCmpnyViewData" component={AdminCmpnyPage} />
          </Switch>
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </>
  );
};

export default AdminDashboardPage;
