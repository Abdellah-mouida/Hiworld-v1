import axios from "axios";

let Axios = axios.create({
  baseURL: "https://hiworld-server.onrender.com",
});
// Add a request interceptor
Axios.interceptors.request.use(
  function (config) {
    // Modify config to include CORS headers
    config.headers["Access-Control-Allow-Origin"] =
      "https://hiworld-client.netlify.app";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default Axios;
