import { createAccountProps } from "@/props/ApiServiceProps/authenticationProps";
/*
Make sure your endpoint returns json in the following format

{
    created : boolean(true/false)
}
*/
export const fetchCreateAccount = async (
  data: createAccountProps
): Promise<boolean> => {
  try {
    let url = "YOUR END POINT HERE";
    // const res = await axios.post(url, data); Uncomment this once you have url in place
    // return res.data.created; Uncomment this once you have url in place
    return true; // remove this once url is placed
  } catch (error) {
    console.error("Error creating account:", error);
    throw error; // You may want to throw the error for handling in the caller function
  }
};
