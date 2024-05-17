import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LoanDetailsProps } from "@/props/ApiServiceProps/loanProps";
import { useSpecificLoanDetails } from "@/customHooks/useSpecificLoanDetails";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import "../../styles/loans.css";
const LoanDetails = ({ loan_id }: LoanDetailsProps) => {
  const loanLogs = useSpecificLoanDetails(loan_id);
  {
    return (
      <DialogContent className="loan-details-card">
        <DialogHeader>
          <DialogTitle>Loan Logs</DialogTitle>
        </DialogHeader>
        <Table>
          <TableCaption>A log of your previous loan</TableCaption>
          <TableRow>
            <TableHead>Loan ID</TableHead>
            <TableHead>Original Amount</TableHead>
            <TableHead>Fine</TableHead>
            <TableHead>Payable Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Entry Date</TableHead>
          </TableRow>

          <TableBody>
            {loanLogs &&
              loanLogs?.map((loan) => (
                <TableRow key={loan.loan_id}>
                  <TableCell>{loan.loan_id}</TableCell>
                  <TableCell>{loan.amount_taken}</TableCell>
                  <TableCell>{loan.fine}</TableCell>
                  <TableCell>{loan.repayable_amount}</TableCell>
                  <TableCell>{loan.status}</TableCell>
                  <TableCell>{loan.entry_date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </DialogContent>
    );
  }
};

export default LoanDetails;
