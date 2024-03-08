import { useCallback, useEffect, useRef, useState } from "react";
import Axios from "../../base/Axios";
import Post from "../../Components/Post";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../../base/CookieName";
import AlertDialog from "../../Material UI/Dialoge";
import Loading from "../../Components/Loading/Loading";
import ProfileSkeleton from "../../Components/Skileton/ProfileSkeleton";
import PostSkilton from "../../Components/Skileton/PostSkilton";

let Posts = () => {
  let [data, setData] = useState([]);
  let cookie = new Cookies();
  let id = cookie.get(HIWORLD_COOKIE_NAME);
  let [render, setRender] = useState(false);
  let [loading, setLoading] = useState(false);
  let [totalLength, setTotalLength] = useState(0);
  let [page, setPage] = useState(1);

  let observator = useRef();
  let lastPostElement = useCallback(
    (node) => {
      if (loading || data?.length === totalLength) return;
      if (observator.current) observator.current.disconnect();
      observator.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          setPage((prev) => prev + 1);
          console.log("add");
        }
      });
      if (node) observator.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    setLoading(true);
    Axios.get("/posts?page=" + page).then((res) => {
      let IDMap = new Map();
      setData(
        (prev) => {
          if (prev) {
            [...prev, ...res.data].forEach((post) => IDMap.set(post._id, post));
            return Array.from(IDMap.values());
          } else {
            return res.data;
          }
        }
        // prev ? [...new Set([...prev, ...res.data])] : res.data
      );
      setLoading(false);
    });
  }, [page]);

  useEffect(() => {
    Axios.get("/posts/totalLength")
      .then((res) => setTotalLength(res.data?.count))
      .catch((err) => console.log(err));
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
      <h2>Posts</h2>
      {/* {loading && <Loading></Loading>} */}
      {data?.map((m, i) =>
        data?.length === i + 1 ? (
          <Post
            postRef={lastPostElement}
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
        ) : (
          <Post
            // postRef={lastPostElement}
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
        )
      )}
      {loading && (
        <>
          <PostSkilton></PostSkilton>
          <PostSkilton></PostSkilton>
          <PostSkilton></PostSkilton>
          <PostSkilton></PostSkilton>
        </>
      )}
    </div>
  );
};
export default Posts;
