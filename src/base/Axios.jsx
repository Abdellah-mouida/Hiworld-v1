import axios from "axios";

let Axios = axios.create({
  baseURL: "https://hiworld-server.onrender.com/",
});
export default Axios;
