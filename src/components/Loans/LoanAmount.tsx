import React from "react";
import { Card, CardTitle } from "../ui/card";

interface LoanAmountProps {
  totalLoanAmount: number | null;
}

const LoanAmount: React.FC<LoanAmountProps> = ({ totalLoanAmount }) =>
     {
  return (
    <Card className="due-loan-card">
      <CardTitle className="font-bold mb-3 text-center">
        {totalLoanAmount !== null ? `Amount Due: ${totalLoanAmount} RS` : "No Loan Pending"}
      </CardTitle>
    </Card>
  );
};

export default LoanAmount;
