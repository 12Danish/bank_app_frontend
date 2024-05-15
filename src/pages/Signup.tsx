import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate here
import "../styles/dashboard-layout.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { create_account } from "@/ApiService/CreateAccount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate(); // Move useNavigate here
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Function to update button disabled state
  const updateButtonState = (
    firstNameValue: string,
    lastNameValue: string,
    dobValue: string,
    phoneNumValue: string,
    roleValue: string,
    emailValue: string,
    passwordValue: string
  ) => {
    setIsButtonDisabled(
      !(
        firstNameValue &&
        lastNameValue &&
        dobValue &&
        phoneNumValue &&
        roleValue &&
        emailValue &&
        passwordValue
      )
    );
  };

  // Function to handle form submission (create account)
  const handleCreateAccount = async () => {
    try {
      console.log("Creating account...");
      const res = await create_account(
        firstName,
        lastName,
        dob,
        phoneNum,
        role,
        email,
        password
      );
      console.log(res);
      if (res) {
        toast.success("Account Created. You are being redirected!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }); // Handle successful account creation

        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } else {
        console.log("Error: Registration failed!");
        toast.error(
          "Registration failed! Please follow the specified format.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
    } catch (error) {
      console.error("Error creating account:", error);
      // Handle error if create_account function throws an error
      toast.error("An error occurred while creating the account.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };


  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setFirstName(value);
    updateButtonState(value, lastName, dob, phoneNum, role, email, password);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setLastName(value);
    updateButtonState(firstName, value, dob, phoneNum, role, email, password);
  };

  const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDob(value);
    updateButtonState(
      firstName,
      lastName,
      value,
      phoneNum,
      role,
      email,
      password
    );
  };

  const handlePhoneNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPhoneNum(value);
    updateButtonState(firstName, lastName, dob, value, role, email, password);
  };

  const handleRoleChange = (value: string) => {
    setRole(value);
    updateButtonState(
      firstName,
      lastName,
      dob,
      phoneNum,
      value,
      email,
      password
    );
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    updateButtonState(
      firstName,
      lastName,
      dob,
      phoneNum,
      role,
      value,
      password
    );
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    updateButtonState(firstName, lastName, dob, phoneNum, role, email, value);
  };

  return (
    <>
      <div className="center-body-wrapper">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Max"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Robinson"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="dob">Date Of Birth</Label>
                  <Input
                    id="dob"
                    placeholder="DD-MM-YYYY"
                    value={dob}
                    onChange={handleDobChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone-num">Phone Number</Label>
                  <Input
                    id="phone-num"
                    placeholder="XXXXXXXXXXX-X"
                    value={phoneNum}
                    onChange={handlePhoneNumChange}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select value={role} onValueChange={handleRoleChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="----" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Customer">Customer</SelectItem>
                    <SelectItem value="Employee">Employee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                onClick={handleCreateAccount}
                disabled={isButtonDisabled}
              >
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <NavLink to="/login" className="underline">
                Sign in
              </NavLink>
            </div>
          </CardContent>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
