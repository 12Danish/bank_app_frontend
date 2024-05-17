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

  useEffect(() => {
    if (loanApproved) {
      const timer = setTimeout(() => {
        setLoanApproved(false);
      }, 3000); // Reset after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [loanApproved]);

  const handleLoanApproval = () => {
    setLoanApproved(true);
  };
  return (
    <div className="loans-body-wrapper">
      <LoanAmount totalLoanAmount={totalLoanAmountData} />
      <RequestLoan loanApproval = {handleLoanApproval}/>
      <LoanHistory loanHistory={loanHistoryData} />
      <ToastContainer />
    </div>
  );
};

export default Loans;
