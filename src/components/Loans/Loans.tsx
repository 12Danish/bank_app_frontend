import "../../styles/loans.css";

import { useLoanHistory } from "@/customHooks/useLoanHistory";
import { ToastContainer } from "react-toastify";
import LoanAmount from "./LoanAmount";
import RequestLoan from "./RequestLoan";
import LoanHistory from "./LoanHistory";
import { useState, useEffect } from "react";
const Loans = () => {
  const { loanHistoryData, totalLoanAmountData } = useLoanHistory();
  const [loanApproved, setLoanApproved] = useState(false);

  const handleLoanApproval = () => {
    setLoanApproved(!loanApproved);
  };
  return (
    <div className="loans-body-wrapper">
      <LoanAmount totalLoanAmount={totalLoanAmountData} />
      <RequestLoan loanApproval={handleLoanApproval} />
      <LoanHistory
        loanHistory={loanHistoryData}
        loanApproval={handleLoanApproval}
      />
      <ToastContainer />
    </div>
  );
};

export default Loans;
