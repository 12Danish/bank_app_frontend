import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Cookies from "js-cookie";
import "../styles/dashboard-layout.css";

import { login } from "@/ApiService/login";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { notification } from "@/props/notification_props";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate here
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import "../styles/dashboard-layout.css";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["Customer", "Employee"]),
});

type FormFields = z.infer<typeof formSchema>;

export const Login = () => {
  const navigate = useNavigate(); // Move useNavigate here
  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await login(data);

      if (res) {
        handleCookies(res);
        navigate("/dashboard");
      } else {
        toast.error("Invalid Credentials", { ...notification });
      }
    } catch (error) {
      toast.error("Invalid Credentials", {
        ...notification,
      });
    }
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <div className="grid gap-2">
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
                </div>
                <div className="grid gap-2">
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
                  />{" "}
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Customer">Customer</SelectItem>
                            <SelectItem value="Employee">Employee</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                </div>
                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className="min-w-full"
                >
                  {form.formState.isSubmitting ? "Loading..." : "Login"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <div className="mt-4 text-center text-sm">
          Dont have an account?{" "}
          <NavLink to="/signup" className="underline">
            Sign up
          </NavLink>
        </div>
      </Card>
      <ToastContainer />
    </div>
  );
};

const handleCookies = (res: number) => {
  if (Cookies.get("account_id")) {
    // Remove the existing cookie
    Cookies.remove("account_id");
  }

  // Set the cookie with the new account_id value
  Cookies.set("account_id", res);

  // Redirect or perform other actions
};

export default Login;
