import { useState, useEffect } from "react";
import {  fetchLoanHistory,  fetchTotalLoanAmount,fetchSpecificLoanDetails } from "@/ApiService/loanDetails";
import { loanHistoryProps } from "@/props/ApiServiceProps/loanHistoryProps";

export const useLoanHistory = () => {
  const [loanHistoryData, setLoanHistoryData] = useState<loanHistoryProps[] | null>(null);
  const [totalLoanAmountData, setTotalLoanAmountData] = useState<number | null>(null);

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
  return {loanHistoryData, totalLoanAmountData}
}

