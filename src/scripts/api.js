import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-52-79-168-230.ap-northeast-2.compute.amazonaws.com:8000",
});

export default api;
