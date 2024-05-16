import { AspectRatio } from "@/components/ui/aspect-ratio";
import "../styles/dashboard-layout.css";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
const LogoPage = () => {
  return (
    <div className="center-body-wrapper">
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9}>
          <img
            src="src/assets/images/logo.png"
            alt="Image"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
        <div className="grid grid-rows-2 min-h-48 min-w-48 gap-6">
        <div className="row-span-1 text-7xl font-bold">Loaner</div>
            <div className="flex-row justify-evenly">
            <NavLink to="/login">
                <Button>Proceed</Button>
                </NavLink>
            </div>
        </div>
    </div>
  );
};

export default LogoPage;
