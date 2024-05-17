import { useState, useEffect } from "react";
import { loanLogsProps } from "@/props/ApiServiceProps/loanHistoryProps";
import { fetchSpecificLoanDetails } from "@/ApiService/loanDetails";
export const useSpecificLoanDetails = (loan_id: number) => {
  const [loanLogs, setLoanLogs] = useState<loanLogsProps[] | null>(null);

  useEffect(() => {
    const fetchSpecificLoanData = async () => {
      try {
        const specificLoanData = await fetchSpecificLoanDetails(loan_id);

        setLoanLogs(specificLoanData);
      } catch (error) {
        console.error("Error fetching loan data:", error);
      }
    };

    fetchSpecificLoanData();
  }, []);
  return loanLogs;
};
