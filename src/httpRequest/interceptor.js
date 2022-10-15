import axios from "axios";
const httpService = axios.create({
  baseURL: "https://nisum.humhub.com/api/v1",
});

let token = localStorage.getItem("token");
httpService.interceptors.request.use(
  (request) => {
    if (token) {
      request.headers.common["authorization"] = `Bearer${token}`;
    }
    console.log("request sent");
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);
httpService.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log(error.response);
  }
);
export default httpService;
