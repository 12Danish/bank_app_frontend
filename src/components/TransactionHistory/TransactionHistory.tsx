import { useState, useEffect } from "react";
import { transaction_history } from "@/ApiService/transactionHistory";
import { DataTable } from "./dataTable"
import { Transactions,columns } from "./columns";
import '../../styles/transaction-history.css'
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
<DataTable columns={columns} data={data} />
</div>
  </div>;
};

export default TransactionHistory;
