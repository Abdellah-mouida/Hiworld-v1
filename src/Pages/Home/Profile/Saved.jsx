import { useEffect, useState } from "react";
import Axios from "../../../base/Axios";
import Post from "../../../Components/Post";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../../../base/CookieName";

let Saved = (props) => {
  let cookie = new Cookies();
  let id = cookie.get(HIWORLD_COOKIE_NAME);
  let [data, setData] = useState([]);

  let [render, setRender] = useState(false);
  useEffect(() => {
    Axios.get("/user/" + id + "/saved")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [render]);
  let handleDisLike = async (postId) => {
    try {
      let res = await Axios.delete("/posts/likes/" + postId + "/" + id);
      setRender((p) => !p);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  let handleLike = async (postId) => {
    console.log("Hello");
    try {
      let res = await Axios.put("/posts/likes/" + postId + "/" + id);
      setRender((p) => !p);
    } catch (err) {
      console.log(err);
    }
  };
  let handleAddToSaved = async (postId) => {
    try {
      let res = await Axios.post("/posts/saved/" + id + "/" + postId);
      setRender((p) => !p);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  let handleRemoveFromSaved = async (postId) => {
    try {
      let res = await Axios.delete("/posts/saved/" + id + "/" + postId);
      setRender((p) => !p);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);
  // Follow
  let follow = async (userId) => {
    try {
      let res = await Axios.post("/user/" + id + "/following/" + userId);
      setRender((p) => !p);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  let unfollow = async (userId) => {
    try {
      let res = await Axios.delete("/user/" + id + "/following/" + userId);
      setRender((p) => !p);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {data?.map((m, i) => (
        <Post
          key={i}
          id={m._id}
          user={m.user}
          createdAt={m.createdAt}
          image={m.image}
          currentUser={id}
          howLikeIt={m.howLikeIt}
          description={m.description}
          likes={m.likes}
          Like={handleLike}
          saver={m.saver}
          DisLike={handleDisLike}
          handleAddToSaved={handleAddToSaved}
          handleRemoveFromSaved={handleRemoveFromSaved}
          follow={follow}
          unfollow={unfollow}
        ></Post>
      ))}
    </>
  );
};
export default Saved;
