import axios from "axios";
// import { showToast } from "../../../master/Helper/ToastHelper";

export const customerRegister = async (registerInput) => {
  try {
    const res = await axios.post(`auth/register-next`, registerInput);
    return res;
  } catch (error) {
      return Promise.reject(false)
  }
};
