import { loginProps } from "@/props/ApiServiceProps/authenticationProps";
export const login = async (data: loginProps): Promise<number | null> => {
  try {
    let url = "YOUR END POINT HERE";
    // const res = await axios.post(url, data); Uncomment this once you have url in place
    // return res.data.id; Uncomment this once you have url in place
    return 1; // remove this once url is placed
  } catch (error) {
    console.error("Error creating account:", error);
    throw error; // You may want to throw the error for handling in the caller function
  }
};
