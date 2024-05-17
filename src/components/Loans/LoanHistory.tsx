import { Card, CardTitle } from "@/components/ui/card";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import "../../styles/loans.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,

  TableRow,
} from "@/components/ui/table";
import {
  returnTypeLoanHistory,
} from "@/props/ApiServiceProps/loanHistoryProps";
import { Button } from "../ui/button";

const LoanHistory = (loanHistory: returnTypeLoanHistory) => {
  return (
    <>
      <Card className="prev-loan-card">
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
              <TableHead >Status</TableHead>
              <TableHead ></TableHead>
              <TableHead ></TableHead>
            </TableRow>

          <TableBody>
           
            <TableRow>
            <TableCell className="font-medium">500</TableCell>
              <TableCell >500</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>11-1-24</TableCell>
              <TableCell >12-2-24</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell> <Button>Details</Button></TableCell>
              <TableCell><Button>Pay Loan</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default LoanHistory;
