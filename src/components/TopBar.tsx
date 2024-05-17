import LogoutIcon from '@mui/icons-material/Logout';
import '../styles/top-bar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import { logout } from '@/ApiService/logout';
const TopBar = () => {
  const navigate =useNavigate();
  const handleLogOut = async () =>{
    await logout();
    Cookies.remove('account_id');
    setTimeout(() => {
      navigate("/");
    }, 3000)

  }
  return (
    <div className='top-bar-wrapper'>
      <NavLink to='/' className="flex items-center gap-1">
        <LogoutIcon onClick={handleLogOut}/>
      </NavLink>
    </div>
  );
};

export default TopBar;
