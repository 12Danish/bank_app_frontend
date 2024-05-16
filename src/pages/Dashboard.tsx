// Dashboard.js
import SidePanel from "@/components/SidePanel";
import TopBar from "@/components/TopBar";
import '../styles/dashboard-layout.css'
import Home from "@/components/Home";
import TransferMoney from "@/components/TransferMoney";
import TransactionHistory from "@/components/TransactionHistory/TransactionHistory";
import Loans from "@/components/Loans/Loans";
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from "@/components/Profile";
import Cookies from "js-cookie";

const Dashboard = () => {
  return (
    <div className="page-wrapper">
      {!!Cookies.get("account_id") ? (
        <>
          <div className="side-panel-wrapper">
            <SidePanel />
          </div>
          <div className="remaining-screen-wrapper">
            <TopBar />
            <div className="dash-layout-body-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="transfer-money" element={<TransferMoney />} />
                <Route path="transaction-history" element={<TransactionHistory />} />
                <Route path="loans" element={<Loans />} />
                <Route path="profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="access-denied-container">
        You do not have access, please login
        <NavLink to="/login" className="underline">
              Click Here
            </NavLink>
   
        </div>
        
      </>
      )}
    </div>
  );
};

export default Dashboard;
