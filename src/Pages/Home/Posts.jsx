import { useEffect, useState } from "react";
import Axios from "../../base/Axios";
import Post from "../../Components/Post";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../../base/CookieName";
import AlertDialog from "../../Material UI/Dialoge";

let Posts = () => {
  let [data, setData] = useState([]);
  let cookie = new Cookies();
  let id = cookie.get(HIWORLD_COOKIE_NAME);
  let [render, setRender] = useState(false);
  useEffect(() => {
    Axios.get("/posts").then((res) => setData(res.data));
  }, []);

  let handleLike = async (postId) => {
    try {
      let res = await Axios.put("/posts/likes/" + postId + "/" + id);
      setData((prev) =>
        prev.map((post, i) =>
          post._id === postId
            ? {
                ...post,
                howLikeIt: post?.howLikeIt ? [...post?.howLikeIt, id] : [id],
              }
            : post
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  let handleDisLike = async (postId) => {
    try {
      let res = await Axios.delete("/posts/likes/" + postId + "/" + id);
      setData((prev) =>
        prev.map((post, i) =>
          post._id === postId
            ? {
                ...post,
                howLikeIt: post?.howLikeIt?.filter((x) => x !== id),
              }
            : post
        )
      );

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  let handleAddToSaved = async (postId) => {
    try {
      let res = await Axios.post("/posts/saved/" + id + "/" + postId);
      setData((prev) =>
        prev.map((post, i) =>
          post._id === postId
            ? {
                ...post,
                saver: post?.saver ? [...post?.saver, id] : [id],
              }
            : post
        )
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  let handleRemoveFromSaved = async (postId) => {
    try {
      let res = await Axios.delete("/posts/saved/" + id + "/" + postId);
      setData((prev) =>
        prev.map((post, i) =>
          post._id === postId
            ? {
                ...post,
                saver: post?.saver?.filter((x) => x !== id),
              }
            : post
        )
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // Follow
  let follow = async (userId) => {
    try {
      let res = await Axios.post("/user/" + id + "/following/" + userId);
      setData((prev) =>
        prev.map((post, i) =>
          post?.user?._id === userId
            ? {
                ...post,
                user: {
                  ...post?.user,
                  followers: post?.user?.followers
                    ? [...post?.user?.followers, id]
                    : [id],
                },
              }
            : post
        )
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  let unfollow = async (userId) => {
    try {
      let res = await Axios.delete("/user/" + id + "/following/" + userId);
      setData((prev) =>
        prev.map((post, i) =>
          post?.user?._id === userId
            ? {
                ...post,
                user: {
                  ...post?.user,
                  followers: post?.user?.followers?.filter((x) => x !== id),
                },
              }
            : post
        )
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  //
  console.log(data);
  //

  return (
    <div className="container">
      <h2>Posts</h2>{" "}
      {data.map((m, i) => (
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
    </div>
  );
};
export default Posts;
