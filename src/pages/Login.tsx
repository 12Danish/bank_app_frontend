import { NavLink } from "react-router-dom";
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
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [role, setRole] = useState("");
  // Function to handle changes in email input
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    updateButtonState(value, password,role);
  };

  // Function to handle changes in password input
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    updateButtonState(email, value, role);
  };
  const handleRoleChange = (value: string) => {
    console.log(value);
    setRole(value);
    console.log(`role + ${role}`)
    updateButtonState(email, password, value);
  };

  // Function to update button disabled state
  const updateButtonState = (emailValue: string, passwordValue: string, roleValue:string) => {
    setIsButtonDisabled(!(emailValue && passwordValue && roleValue));
  };



  // Function to handle form submission (login)
  const handleLogin = () => {
    // Perform login logic here
    console.log("Logging in...");
  };

  return (
    <div className="center-body-wrapper">
      {" "}
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={handleRoleChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Customer">Customer</SelectItem>
                  <SelectItem value="Employee">Employee</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={handleLogin}
              disabled={isButtonDisabled}
            >
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Dont have an account?{" "}
            <NavLink to="/signup" className="underline">
              Sign up
            </NavLink>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
