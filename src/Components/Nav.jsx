import { NavLink } from "react-router-dom";

let Nav = () => {
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
        <div className="img-nav-profile"></div>
      </div>
    </nav>
  );
};
export default Nav;
