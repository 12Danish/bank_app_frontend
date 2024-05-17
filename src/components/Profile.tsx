import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import "../styles/profile.css";
import { userDataProps } from "@/props/ApiServiceProps/userDataProps";
import { getUserDetails } from "@/ApiService/getUserInfo";
const Profile = () => {
  const [userData, setUserData] = useState<userDataProps>({
    name: "",
    email: "",
    cnic: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    street: "",
  });

  useEffect(() => {
    const getProfileDetails = async () => {
      try {
        const data = await getUserDetails();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    };

    getProfileDetails();
  }, []);

  return (
    <div className="profile-body-wrapper">
      <Card className="max-h-screen">
        <CardHeader>
          <CardTitle>CustomerDetails </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* First Row */}
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p>Name</p>
                <CardDescription className="mb-5">
                  {userData.name}
                </CardDescription>
              </div>
              <div>
                <p>Email</p>
                <CardDescription className="mb-5">
                  {userData.email}
                </CardDescription>
              </div>
              <div>
                <p>CNIC</p>
                <CardDescription className="mb-5">
                  {" "}
                  {userData.cnic}
                </CardDescription>
              </div>
              <div>
                <p>Phone Number</p>
                <CardDescription className="mb-5">
                  {" "}
                  {userData.phoneNumber}
                </CardDescription>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p>Country</p>
                <CardDescription className="mb-5">
                  {" "}
                  {userData.country}
                </CardDescription>
              </div>
              <div>
                <p>State</p>
                <CardDescription className="mb-5">
                  {userData.state}
                </CardDescription>
              </div>
              <div>
                <p>City</p>
                <CardDescription className="mb-5">
                  {" "}
                  {userData.state}
                </CardDescription>
              </div>
              <div>
                <p>Street</p>
                <CardDescription className="mb-5">
                  {" "}
                  {userData.street}
                </CardDescription>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
