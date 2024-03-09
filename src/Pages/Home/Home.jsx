import { useEffect } from "react";
import Axios from "../../base/Axios";
import Nav from "../../Components/Nav";
import { Outlet } from "react-router-dom";

let Home = () => {
  return (
    <div className="home">
      <Nav></Nav>

      <Outlet></Outlet>
    </div>
  );
};
export default Home;
