import { axiosInstance } from "./superHero";

export const getData = (endpoint, params) => {
    return axiosInstance()
      .get(endpoint,{params})
      .then((response) => response.data);
  };