export const fetchLoanHistory = async () => {
  try {
    let url = "YOUR END POINT HERE";
    // const res = await axios.post(url, data); Uncomment this once you have url in place
    // return res.data.history Make sure the response is in json but history is a list of objects
    // remove this once url is placed
    return [
      {
        loan_id: 1,
        date_of_issuance: "2023-05-01",
        date_of_return: "2023-11-01",
        amount_taken: 5000,
        fine: 0,
        repayable_amount: 5200,
        status: "unpaid",
      },
    ];
  } catch (error) {
    console.error("Error creating account:", error);
    throw error; // You may want to throw the error for handling in the caller function
  }
};

export const fetchTotalLoanAmount = async () => {
  try {
    let url = "YOUR END POINT HERE";
    // const res = await axios.post(url, data); Uncomment this once you have url in place
    // return res.data.totalAmount; Uncomment this once you have url in place
    // remove this once url is placed
    return 2;
  } catch (error) {
    console.error("Error creating account:", error);
    throw error; // You may want to throw the error for handling in the caller function
  }
};

export const fetchSpecificLoanDetails = async (loan_id: number) => {
  try {
    let url = "YOUR END POINT HERE";
    // const res = await axios.post(url, data); Uncomment this once you have url in place
    // return res.data.id; Uncomment this once you have url in place
    // remove this once url is placed
    return [
      {
        loan_id: 1,
        entry_date: "2023-11-01",
        amount_taken: 5000,
        fine: 0,
        repayable_amount: 5200,
        status: "unpaid",
      },
    ];
  } catch (error) {
    console.error("Error creating account:", error);
    throw error; // You may want to throw the error for handling in the caller function
  }
};
