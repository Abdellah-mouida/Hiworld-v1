import { useEffect } from "react";
import Axios from "../../base/Axios";

let Posts = () => {
  useEffect(() => {
    Axios.get("/posts").then((res) => console.log(res));
  });
  return <div>Post</div>;
};
export default Posts;
