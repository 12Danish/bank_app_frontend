import { fetchGetAccountDetails } from "@/ApiService/getAccountDetails";
import { useEffect, useState } from "react";

export const useTransferDetails = () => {
  const [accountNumber, setAccountNumber] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [accountBalance, setAccountBalance] = useState<number | null>(null);
  const [disableInputs, setDisableInputs] = useState(false);
  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const data = await fetchGetAccountDetails();

        // Uncomment these when you have backend links in place
        // setAccountNumber(data.accountNumber);
        // setName(data.name);
        // setAccountBalance(data.balance);
        setAccountNumber(1);
        setName("Danish");
        setAccountBalance(5000);
        setDisableInputs(true); // Disable inputs after fetching data
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    };

    fetchAccountDetails();
  }, []);
  return {
    accountNumber,
    name,
    accountBalance,
    disableInputs,
    // If you want to allow setting the amount dynamically
  };
};
