import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ToastContainer, toast } from "react-toastify";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useNavigate } from "react-router-dom";
import { notification } from "@/props/notification_props";

import { useTransferDetails } from "@/customHooks/useTransferDetails";
import "../styles/transfer-money.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import "../styles/dashboard-layout.css";

import { transfer } from "@/ApiService/transfer";
const formSchema = z.object({
  ban: z.string(),
  amount: z.string(),
  td: z.string(),
});

type FormFields = z.infer<typeof formSchema>;

const TransferMoney = () => {
  const navigate = useNavigate();
  const { accountNumber, name, accountBalance, disableInputs } =
    useTransferDetails();

  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
    if (Number(data.amount) <= 0 || Number(data.ban) <= 0) {
      form.setError("amount", { message: "Amount must be a positive number" });
      form.setError("ban", { message: "Beneficiary Account Number must be a positive number" });
      return; // Stop form submission here
    }
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await transfer({
        amount: Number(data.amount),
        to_account_id: Number(data.ban),
        description: data.td,
      });
      if (res) {
        toast.success("Operation successful,amount has been transferred. Redirecting to home page", {
          ...notification,
        });
        setTimeout(() => {
          navigate("/dashboard");
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
    <div className="tm-body-wrapper">
      <div className="single-column items-end mr-5">
        <Card className=" w-80 card  min-h-96">
          <CardHeader>
            <CardTitle>Source Account </CardTitle>
            <CardDescription>Source Account Details</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-sm font-medium">Account Number</p>
            <Input
              placeholder={accountNumber}
              className="mb-3"
              value={accountNumber}
              disabled={disableInputs}
            />
            <p className="mb-3 text-sm font-medium">Name</p>
            <Input
              placeholder="Name"
              className="mb-3"
              value={name}
              disabled={disableInputs}
            />
          </CardContent>
          <CardFooter>
            <div className="account-balance">
              Available Balance * : {accountBalance}
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="single-column ">
        <Card className="w-96 card  max-h-96">
          <CardHeader>
            <CardTitle>Beneficiary Account</CardTitle>
            <CardDescription>Beneficiary AccountDetails</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form} >
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="ban"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Beneficiary Account Number</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>

                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="td"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transaction details</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Donation">Donation</SelectItem>
                          <SelectItem value="Family Transfer">
                            Family Transfer
                          </SelectItem>
                          <SelectItem value="To Own Account">
                            To Own Account
                          </SelectItem>
                          <SelectItem value="Bill Payment">
                            Bill Payment
                          </SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className="min-w-full mt-5"
                >
                  {form.formState.isSubmitting ? "Processing..." : "Transfer"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TransferMoney;
