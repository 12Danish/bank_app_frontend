import { Transactions } from "@/props/ApiServiceProps/transactionHistory";
import axios from "axios";

export const fetchTransactionHistory = async (): Promise<Transactions[]> => {
  try {
    let url = "http://localhost:4000/transaction_history";

    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    throw error; // You may want to throw the error for handling in the caller function
  }
};
