import axios from "axios";

export const fetcher = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});
