export const fetchGetUserDetails = async () => {
  try {
    let url = "YOUR END POINT HERE";
    // const res = await axios.get(url)
    // return res.data.details; Uncomment this once you have url in place

    return {
      name: "Danish Abbas ",
      email: "danishabbas2004@gmail.com",
      cnic: "12345-6789012-3",
      phoneNumber: "555-1234",
      country: "Pakistan",
      state: "Punjab",
      city: "Lahore",
      street: "1234 Elm Street",
    }; // remove this once url is placed
  } catch (error) {
    console.error("Error creating account:", error);
    throw error; // You may want to throw the error for handling in the caller function
  }
};
