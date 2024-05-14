import { NavLink } from "react-router-dom"
import '../styles/dashboard-layout.css'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  

const  Signup = ()=> {
  return (
    <div className="center-body-wrapper">
    <Card className="mx-auto max-w-sm">
    {/* This is the header */}
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
         {/* First And Last Name */}
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
           {/* Phone num and dob */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="dob">Date Of Birth</Label>
              <Input id="dob" placeholder="DD-MM-YYYY" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone-num">Phone Number </Label>
              <Input id="phone-num" placeholder="XXXXXXXXXXX-X" required />
            </div>
          </div>
           {/* Role */}
          <div className="grid gap-2">
          <Label htmlFor="role">Role</Label>
            <Select>
          <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Customer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Customr">Customer</SelectItem>
              <SelectItem value="Employee">Employee</SelectItem>
              </SelectContent>
          </Select>
          </div>
           {/* email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
           {/* password */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
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
    )
}
export default Signup;
