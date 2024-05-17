import { fetchLogout } from "@/ApiService/logout";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/top-bar.css";
const TopBar = () => {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await fetchLogout();
    Cookies.remove("account_id");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div className="top-bar-wrapper">
      <NavLink to="/" className="flex items-center gap-1">
        <LogoutIcon onClick={handleLogOut} />
      </NavLink>
    </div>
  );
};

export default TopBar;
