import { NavLink } from "react-router-dom";
import AccountMenu from "../Material UI/Menu";
import { useEffect, useState } from "react";
import Axios from "../base/Axios";

import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../base/CookieName";

let Nav = () => {
  let [user, setUser] = useState({});
  let cookie = new Cookies();
  let id = cookie.get(HIWORLD_COOKIE_NAME);
  useEffect(() => {
    Axios.get("/user/" + id).then((res) => {
      setUser(res.data.user);
    });
  }, []);
  return (
    <nav>
      <div className="logo">
        <b>
          <i className="fa-solid fa-earth-americas"></i> Hi
        </b>
        world
      </div>
      <div className="navigation">
        <NavLink className="Link nav-link" to={"/home"}>
          Home
        </NavLink>
        <NavLink className="Link nav-link" to={"/chat"}>
          Chat
        </NavLink>

        <NavLink className="Link nav-link" to={"/about"}>
          About
        </NavLink>
      </div>

      <div className="nav-profile">
        {/* <div className="img-nav-profile"></div> */}
        <AccountMenu user={user}></AccountMenu>
      </div>
    </nav>
  );
};
export default Nav;
