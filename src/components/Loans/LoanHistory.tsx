import { Card, CardTitle } from "@/components/ui/card";
import { Dialog,DialogTrigger } from "@radix-ui/react-dialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

import "../../styles/loans.css";
import { Button } from "../ui/button";
import LoanDetails from "./LoanDetails";
import LoanPayment from "./LoanPayment";
import { loanHistoryComponentProps } from "@/props/ApiServiceProps/loanProps";
const LoanHistory = ({
  loanHistory,
  loanApproval,
}: loanHistoryComponentProps) => {
  return (
    <>
      <Card className="prev-loan-card">
        {loanHistory && loanHistory.length > 0 ? (
          <>
            <CardTitle className=" font-bold mb-3 text-center">
              Previous loans
            </CardTitle>

            <Table>
              <TableCaption>A list of your previous loans</TableCaption>
              <TableRow>
                <TableHead>Loan ID</TableHead>
                <TableHead>Original Amount</TableHead>
                <TableHead>Payable Amount</TableHead>
                <TableHead>Date of Issuance</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
              </TableRow>

              <TableBody>
                {loanHistory.map((loan) => (
                  <TableRow key={loan.loan_id}>
                    <TableCell className="font-medium">
                      {loan.loan_id}
                    </TableCell>
                    <TableCell>{loan.amount_taken}</TableCell>
                    <TableCell>{loan.repayable_amount}</TableCell>
                    <TableCell>{loan.date_of_issuance}</TableCell>
                    <TableCell>{loan.date_of_return}</TableCell>
                    <TableCell>{loan.status}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger>
                          <Button>Details</Button>
                        </DialogTrigger>
                        <LoanDetails loan_id={loan.loan_id} />
                      </Dialog>
                    </TableCell>
                    <TableCell>
                      {loan.status.toLowerCase() == "unpaid" ? (
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Button>Pay Loan</Button>
                          </AlertDialogTrigger>
                          <LoanPayment loan_id={loan.loan_id} loanApproval={loanApproval} />
                        </AlertDialog>
                      ) : (
                        "Paid"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        ) : (
          <CardTitle>No Previous Loans Taken</CardTitle>
        )}
      </Card>
    </>
  );
};

export default LoanHistory;
