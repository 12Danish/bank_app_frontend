import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { fetchLoanPayment } from "@/ApiService/loanPayment";
import { loanPaymentProps } from "@/props/ApiServiceProps/loanProps";
import { notification } from "@/props/notification_props";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoanPayment = ({ loan_id, loanApproval }: loanPaymentProps) => {
  const handleContinueClick = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetchLoanPayment(Number(loan_id));
      console.log(res);
      if (res) {
        toast.success("Loan Paid.", { ...notification });
        console.log(res);
        loanApproval();
      } else {
        toast.error("Insufficient Balance to pay Loan.", {
          ...notification,
        });
      }
    } catch (error) {
      toast.error("Insufficient Balance to pay Loan.", {
        ...notification,
      });
    }
  };
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Confirm Payment.</AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleContinueClick}>
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default LoanPayment;
