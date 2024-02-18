import { NavLink } from "react-router-dom";
import AccountMenu from "../Material UI/Menu";
import { useEffect, useState } from "react";
import Axios from "../base/Axios";

import Cookies from "universal-cookie";

let Nav = () => {
  let [user, setUser] = useState({});
  let cookie = new Cookies();
  let id = cookie.get("hiworld-user-id");
  useEffect(() => {
    Axios.get("/user/" + id).then((res) => {
      setUser(res.data);
      console.log(res.data);
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

        <NavLink className="Link nav-link" to={"/create-post"}>
          Create Post
        </NavLink>

        <NavLink className="Link nav-link" to={"/about"}>
          About
        </NavLink>
      </div>

      <div className="nav-profile">
        {/* <div className="img-nav-profile"></div> */}
        <AccountMenu firstLetter={"A"} user={user}></AccountMenu>
      </div>
    </nav>
  );
};
export default Nav;
