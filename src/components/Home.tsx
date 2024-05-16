import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Person4Icon from "@mui/icons-material/Person4";
import "../styles/home.css";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Card } from "./ui/card";
import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBalance } from "@/ApiService/getAccountDetails";
const Home = () => {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const getBalancedetails = async () => {
      try {
        const data = await getBalance();
        setBalance(data);
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    };

    getBalancedetails();
  }, []);

  return (
    <div className="home-body-wrapper">
      <div className="relative">
        <HoverCard>
          <HoverCardTrigger>
            <Card className="option-tag hover:bg-stone-500">
              <div className="tag-icon">
                <AccountBalanceIcon sx={{ width: 200, height: 200 }} />
              </div>
              <div className="tag-small-text">Current Balance</div>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent className="italic">
            Balance: {balance !== null ? balance : "Loading..."}
          </HoverCardContent>
        </HoverCard>
      </div>
      <NavLink to="/dashboard/transfer-money">
        <Card className="option-tag hover:bg-stone-500">
          <div className="tag-icon">
            <CompareArrowsIcon sx={{ width: 200, height: 200 }} />
          </div>
          <div className="tag-small-text">Transfer Money</div>
        </Card>
      </NavLink>
      <NavLink to="/dashboard/profile">
        <Card className="option-tag hover:bg-stone-500">
          <div className="tag-icon">
            <Person4Icon sx={{ width: 200, height: 200 }} />
          </div>
          <div className="tag-small-text">Profile</div>
        </Card>
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Home;
