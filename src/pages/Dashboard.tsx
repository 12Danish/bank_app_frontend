
import SidePanel from "@/components/SidePanel";
import TopBar from "@/components/TopBar";
import '../styles/dashboard-layout.css'
import Home from "@/components/Home";
import TransferMoney from "@/components/TransferMoney";
const Dashboard = () => {
  return (
    <div className="page-wrapper">
    <div className="side-panel-wrapper">
      <SidePanel />
    </div>
    <div className="remaining-screen-wrapper">
      <TopBar />
      <div className="dash-layout-body-wrapper">
    <Home />
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
