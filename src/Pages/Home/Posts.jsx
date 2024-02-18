import { useEffect, useState } from "react";
import Axios from "../../base/Axios";
import Post from "../../Components/Post";

let Posts = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("/posts").then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div className="container">
      <h2>Posts</h2>{" "}
      {data.map((m, i) => (
        <Post
          user={m.user}
          createdAt={m.createdAt}
          image={m.image}
          description={m.description}
          likes={m.likes}
        ></Post>
      ))}
    </div>
  );
};
export default Posts;
