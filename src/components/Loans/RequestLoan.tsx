import { fetchLoanRequest } from "@/ApiService/loanRequest";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RequestLoanProps } from "@/props/ApiServiceProps/loanProps";
import { notification } from "@/props/notification_props";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestLoan = (loanApproval: RequestLoanProps) => {
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const [showError, setShowError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async () => {
    if (!amount) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
      setDisabled(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const res = await fetchLoanRequest(Number(amount));
        console.log(res);
        if (res) {
          toast.success("Loan Approved.", { ...notification });
          console.log(res);
          loanApproval();
        } else {
          toast.error("Disapproved. Please clear existing loans first.", {
            ...notification,
          });
        }
      } catch (error) {
        toast.error("Invalid Credentials", {
          ...notification,
        });
      } finally {
        setDisabled(false);
      }
    }
  };

  return (
    <>
      <Card className="loan-card">
        <CardHeader>
          <CardTitle className=" font-bold mb-3">Request A Loan</CardTitle>{" "}
          <CardDescription>
            * A maximum of 1000 RS loan will be dispensed at a time.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          {!showError ? (
            <p className="mb-6">Select Amount</p>
          ) : (
            <p className="mb-6 text-red-500">Select Amount</p>
          )}
          <Select
            value={amount}
            onValueChange={(value) => {
              setAmount(value);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="---" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="250">250</SelectItem>
              <SelectItem value="500">500</SelectItem>
              <SelectItem value="750">750</SelectItem>
              <SelectItem value="1000">1000</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className="absolute bottom-0 right-0 mb-6 mr-4"
            type="submit"
            disabled={disabled}
            onClick={handleSubmit}
          >
            {!disabled ? "Request" : "Processing.."}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default RequestLoan;
