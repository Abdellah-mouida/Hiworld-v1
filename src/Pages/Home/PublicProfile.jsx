import { Avatar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Axios from "../../base/Axios";
import Post from "../../Components/Post";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../../base/CookieName";
import { NavLink, Outlet, useParams } from "react-router-dom";
import MyPosts from "./Profile/MyPost";

let PublicProfile = () => {
  let [data, setData] = useState({});
  let cookie = new Cookies();
  let { serial_code } = useParams();
  let [fileChanged, setFileChanged] = useState(false);
  let inp = useRef(null);
  let [render, setRender] = useState(false);
  let id = new Cookies().get(HIWORLD_COOKIE_NAME);
  useEffect(() => {
    Axios.get("/user/public/" + serial_code)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [render]);

  // let handleChangeProfile = (e) => {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(e.target.files.item(0));
  //   reader.addEventListener("load", async () => {
  //     try {
  //       let res = await Axios.post("/user/" + id + "/profile", {
  //         profile: reader.result,
  //       });
  //       console.log(res);
  //       setFileChanged((p) => !p);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // };

  let handleDisLike = async (postId) => {
    try {
      let res = await Axios.delete(
        "/posts/likes/" + postId + "/" + data?.user?._id
      );
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
    <div className="container">
      <div className="profile" style={{ marginTop: "2rem" }}>
        <header>
          {/* <div className="profile-img img-c">
            <i className="fas fa-pen"></i>
          </div> */}

          {data.user?.profile ? (
            <Avatar
              sx={{
                width: "30vmin",
                height: "30vmin",
                fontSize: "20vmin",
                backgroundImage: `url(${data.user.profile})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                overflow: "visible",
              }}
              className="profile-img"
            ></Avatar>
          ) : (
            <Avatar
              sx={{
                width: "30vmin",
                height: "30vmin",
                fontSize: "20vmin",
                backgroundColor: "var(--Prcl)",
                overflow: "visible",
              }}
              className="profile-img"
            >
              {data.user?.name && data.user.name[0]}
            </Avatar>
          )}
          <div className="user-info">
            <div className="name-section">
              <h4>{data?.user?.name}</h4>
              {data?.user?.followers?.includes(id) ? (
                <button
                  className="btn-des"
                  onClick={() => unfollow(data?.user?._id)}
                >
                  Unfollow
                </button>
              ) : (
                <button onClick={() => follow(data?.user?._id)}>Follow</button>
              )}{" "}
            </div>
            <p>{new Date(data?.user?.createdAt).toDateString()}</p>
          </div>
        </header>
        <div className="follows">
          <div className="box">
            <h4 className="box-title">Posts</h4>
            <p> {data?.user?.posts?.length} </p>
          </div>
          <div className="box">
            <h4 className="box-title">Followers</h4>
            <p> {data?.user?.followers?.length} </p>
          </div>
          <div className="box">
            <h4 className="box-title">Following</h4>
            <p> {data?.user?.following?.length} </p>
          </div>
        </div>
        <div className="profile-more-info">
          {data?.user?.gender && (
            <div className="card">
              <b>👩🏻👨🏻</b>
              <h4>Gender</h4>
              <p>{data?.user?.gender}</p>
            </div>
          )}
          {data?.user?.phoneNumber && (
            <div className="card">
              <b>📞</b>
              <h4>Phone</h4>
              <p>{data?.user?.phoneNumber}</p>
            </div>
          )}
          {data?.user?.birthDay && (
            <div className="card">
              <b>🎂</b>
              <h4>Birth Day</h4>
              <p>
                {new Date(data?.user?.birthDay).toISOString().split("T")[0]}
              </p>
            </div>
          )}
          {data?.user?.country && (
            <div className="card">
              <b>🏳</b>
              <h4>Country</h4>
              <p>{data?.user?.country}</p>
            </div>
          )}
        </div>
        {data?.user?.bio && (
          <div className="bio">
            <h3>Bio</h3>
            <p
              style={{
                whiteSpaceCollapse: "break-spaces",
              }}
            >
              {data?.user?.bio}
            </p>
          </div>
        )}

        <div className="posts" style={{ margin: "2rem 0" }}>
          {data?.user?.posts.map((m, i) => (
            <Post
              showBtn
              key={i}
              id={m._id}
              user={m.user}
              createdAt={m.createdAt}
              image={m.image}
              currentUser={id}
              howLikeIt={m.howLikeIt}
              description={m.description}
              likes={m.likes}
              saver={m.saver}
              Like={handleLike}
              DisLike={handleDisLike}
              handleAddToSaved={handleAddToSaved}
              handleRemoveFromSaved={handleRemoveFromSaved}
              // follow={follow}
              // unfollow={unfollow}
            ></Post>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PublicProfile;
