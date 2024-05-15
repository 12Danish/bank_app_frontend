import { createAccount } from "@/ApiService/createAccount";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { notification } from "@/props/notification_props";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate here
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import "../styles/dashboard-layout.css";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  dob: z.string(),
  phoneNum: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type FormFields = z.infer<typeof formSchema>;

const Signup = () => {
  const navigate = useNavigate(); // Move useNavigate here
  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await createAccount(data);

      if (res) {
        toast.success("Operation successful, you are being redirected", {
          ...notification,
        });

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.error("Operation failed", { ...notification });
      }
    } catch (error) {
      toast.error("Operation failed", {
        ...notification,
      });
    }
  };

  return (
    <>
      <div className="center-body-wrapper">
        <Card className="max-h-screen">
          {/* This portion has the header */}
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          {/* This portion has the body of the form */}
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid gap-4">
                  {/* First Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* First Name */}
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g Max" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Last Name */}
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g Chaudhry" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Second Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* DOB*/}
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth</FormLabel>
                          <FormControl>
                            <Input placeholder="DD/MM/YYYY" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Third Row */}
                    <FormField
                      control={form.control}
                      name="phoneNum"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="XXXXXXX-X" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Fourth Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="example@gmail.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className="min-w-full"
                >
                  {form.formState.isSubmitting ? "Loading..." : "Submit"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <NavLink to="/login" className="underline">
              Sign in
            </NavLink>
          </div>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
