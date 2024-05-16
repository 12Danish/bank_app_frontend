import { useState, useEffect } from 'react';
import {getAccountDetails }from '@/ApiService/getAccountDetails';

export const useTransferDetails = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [name, setName] = useState('');
  const [accountBalance, setAccountBalance] = useState(0);
  const [disableInputs, setDisableInputs] = useState(false);
  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const data = await getAccountDetails();
      
        // Uncomment these when you have backend links in place
        // setAccountNumber(data.accountNumber);
        // setName(data.name);
        // setAccountBalance(data.balance);
        setAccountNumber("12");
        setName("Danish");
         setAccountBalance(500);
        setDisableInputs(true); // Disable inputs after fetching data
      } catch (error) {
        console.error('Error fetching account details:', error);
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
