import SidePanel from "@/components/SidePanel";
import TopBar from "@/components/TopBar";
import '../styles/dashboard-layout.css'
import Home from "@/components/Home";
import TransferMoney from "@/components/TransferMoney";
import TransactionHistory from "@/components/TransactionHistory/TransactionHistory";
import Loans from "@/components/Loans/Loans";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Dashboard = () => {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <div className="side-panel-wrapper">
          <SidePanel />
        </div>
        <div className="remaining-screen-wrapper">
          <TopBar />
          <div className="dash-layout-body-wrapper">
            <Routes>
              {/* Dashboard Home */}
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />} />
              {/* Nested Routes */}
              <Route
                path="/dashboard/transfer-money"
                element={<TransferMoney />}
              />
              <Route
                path="/dashboard/transaction-history"
                element={<TransactionHistory />}
              />
              <Route path="/dashboard/loans" element={<Loans />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;
