import { useState, useEffect } from "react";
import { transaction_history } from "@/ApiService/transactionHistory";
import { Transactions } from "@/props/ApiServiceProps/transactionHistory";
import '../../styles/transaction-history.css'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TransactionHistory = () => {
  const [data, setData] = useState<Transactions[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await transaction_history();
        console.log(res);
        setData(res);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      }
    };

    fetchData(); // Call fetchData after defining it
  }, []); // Remove empty dependency array if you want this effect to run on every render

  return <div className="th-body-wrapper">
<div className="title-wrapper">Transaction History</div>
<div className="th-data-wrapper">
<Table>
  <TableCaption>A List of your recent transactions</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead >Account Id</TableHead>
      <TableHead>Transaction Type</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead >Balance</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {data.map((entry) => (
    <TableRow key={entry.id}>
      <TableCell className="font-medium">{entry.account_id}</TableCell>
      <TableCell>
        {entry.transaction_type === 1
          ? "Withdrawal"
          : entry.transaction_type === 2
          ? "Deposit"
          : "Transfer"}
      </TableCell>
      <TableCell>{entry.date}</TableCell>
      <TableCell>{entry.amount}</TableCell>
      <TableCell>{entry.balance}</TableCell>
    </TableRow>
  ))}
</TableBody>

</Table>
</div>
  </div>;
};

export default TransactionHistory;
