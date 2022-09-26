import { BASE_URL } from "./endpoints";
import axios from "axios";
import { toast } from "react-toastify";

const ACCESS_TOKEN = "4896073783825648";

export const axiosInstance = () => {
  const instance = axios.create({
    baseURL: `${BASE_URL}/${ACCESS_TOKEN}`,
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      toast.error(error?.message || "something went wrong")
      throw error;
    }
  );
  return instance;
};
