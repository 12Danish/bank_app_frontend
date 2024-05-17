// This is being used to get the account details for money transfer
// should return balance, account_id , name
export const fetchGetAccountDetails = async () => {
  try {
    let url = "YOUR END POINT HERE";
    // const res = await axios.get(url)
    // return res.data.details; Uncomment this once you have url in place

    return 1; // remove this once url is placed
  } catch (error) {
    console.error("Error creating account:", error);
    throw error; // You may want to throw the error for handling in the caller function
  }
};

// This is only getting the account balance
export const getBalance = async () => {
  try {
    let url = "YOUR END POINT HERE";
    // const res = await axios.get(url)
    // return res.data.balance; Uncomment this once you have url in place
    return 1; // remove this once url is placed
  } catch (error) {
    console.error("Error creating account:", error);
    throw error; // You may want to throw the error for handling in the caller function
  }
};
