import { useEffect } from "react";
import Axios from "../../base/Axios";

let Home = () => {
  useEffect(() => {
    Axios.get("/").then((res) => console.log(res));
  }, []);

  return (
    <div className="home">
      <h1>Hello world</h1>
      <a href="/sing"></a>
    </div>
  );
};
export default Home;
