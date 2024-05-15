import axios from "axios";

/*
Make sure your endpoint returns json in the following format

{
    created : boolean(true/false)
}


*/ 
export const create_account = async (
  firstName: string,
  lastName: string,
  dob: string,
  phoneNum: string,
  role: string,
  email: string,
  password: string
): Promise<boolean> => {
  try {
    let url = "YOUR END POINT HERE";
    let post_data = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      phoneNum: phoneNum,
      role: role,
      email: email,
      password: password,
    };
    // const res = await axios.post(url, post_data); Uncomment this once you have url in place
    // return res.data.created; Uncomment this once you have url in place
    return true; // remove this once url is placed
  } catch (error) {
    console.error("Error creating account:", error);
    throw error; // You may want to throw the error for handling in the caller function
  }
};
