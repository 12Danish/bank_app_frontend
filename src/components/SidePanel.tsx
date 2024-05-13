import PaymentsIcon from "@mui/icons-material/Payments";
import HistoryIcon from "@mui/icons-material/History";
import "../styles/side-panel.css";
import Person2Icon from "@mui/icons-material/Person2";
import WidgetsIcon from "@mui/icons-material/Widgets";
const SidePanel = () => {
  return (
    <div className="side-panel-wrapper">
      <div className="side-panel-title">My Account</div>
      <div className="spacer" />
      {/* Option 1 */}
      <div className="side-panel-option">
        <div className="icon-wrapper">
          <WidgetsIcon />
        </div>
        <div className="option-text-wrapper">Home</div>
      </div>
      {/* Option 2 */}
      <div className="side-panel-option">
        <div className="icon-wrapper">
          <PaymentsIcon />
        </div>
        <div className="option-text-wrapper">Transfer Money</div>
      </div>
      {/* Option 3 */}
      <div className="side-panel-option">
        <div className="icon-wrapper">
          <HistoryIcon />
        </div>
        <div className="option-text-wrapper"> Transaction History</div>
      </div>
      {/* Last Row */}
      <div className="end-row">
        <div className="icon-wrapper">
          <Person2Icon />
        </div>
        <div className="option-text-wrapper"> Profile</div>
      </div>
    </div>
  );
};

export default SidePanel;
