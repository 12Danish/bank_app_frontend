import {
  fetchLoanHistory,
  fetchTotalLoanAmount,
} from "@/ApiService/loanDetails";
import { loanHistoryProps } from "@/props/ApiServiceProps/loanProps";
import { useEffect, useState } from "react";

export const useLoanHistory = () => {
  const [loanHistoryData, setLoanHistoryData] = useState<
    loanHistoryProps[] | null
  >(null);
  const [totalLoanAmountData, setTotalLoanAmountData] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const loanHistoryResponse = await fetchLoanHistory();
        const totalLoanAmountResponse = await fetchTotalLoanAmount();

        setLoanHistoryData(loanHistoryResponse);
        setTotalLoanAmountData(totalLoanAmountResponse);
      } catch (error) {
        console.error("Error fetching loan data:", error);
      }
    };

    fetchLoanData();
  }, []);
  return { loanHistoryData, totalLoanAmountData };
};
