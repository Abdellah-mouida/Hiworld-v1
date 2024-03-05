import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../base/CookieName";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import { useEffect, useState } from "react";
import Axios from "../base/Axios";

let RequireAuth = () => {
  let cookie = new Cookies();
  let id = cookie.get(HIWORLD_COOKIE_NAME);
  let [valid, setValid] = useState(true);
  // useEffect(() => {
  //   Axios.get("/validate/id/" + id)
  //     .then((res) => setValid(true))
  //     .catch((err) => setValid(false));
  // });

  return id ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>;
};
export default RequireAuth;
