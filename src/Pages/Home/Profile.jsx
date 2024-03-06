import { Avatar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Axios from "../../base/Axios";
import Post from "../../Components/Post";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../../base/CookieName";
import { NavLink, Outlet } from "react-router-dom";
import ProfileSkeleton from "../../Components/Skileton/ProfileSkeleton";

let Profile = () => {
  let [data, setData] = useState({});
  let cookie = new Cookies();
  let id = cookie.get(HIWORLD_COOKIE_NAME);
  let [fileChanged, setFileChanged] = useState(false);
  let inp = useRef(null);
  let [get, setGet] = useState(false);
  useEffect(() => {
    Axios.get("/user/" + id)
      .then((res) => {
        setData(res.data);
        setGet(true);
      })
      .catch((err) => console.log(err));
  }, [fileChanged]);

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
  let handleChangeProfile = async (e) => {
    try {
      const reader = new FileReader();

      reader.onload = async () => {
        try {
          let res = await Axios.post("/user/" + id + "/profile", {
            profile: reader.result,
          });
          setFileChanged((prev) => !prev);
        } catch (err) {
          console.error("Error uploading file:", err);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } catch (err) {
      console.error("Error reading file:", err);
    }
  };

  return (
    <div className="container">
      {!get ? (
        <ProfileSkeleton></ProfileSkeleton>
      ) : (
        <div className="profile" style={{ marginTop: "2rem" }}>
          <header>
            {/* <div className="profile-img img-c">
            <i className="fas fa-pen"></i>
          </div> */}
            <input
              type="file"
              hidden
              ref={inp}
              onChange={handleChangeProfile}
            />
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
              >
                <i
                  className="fas fa-pen"
                  onClick={() => inp.current.click()}
                ></i>
              </Avatar>
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
                <i
                  className="fas fa-pen"
                  onClick={() => inp.current.click()}
                ></i>

                {data.user?.name && data.user.name[0]}
              </Avatar>
            )}
            <div className="user-info">
              <h4>{data?.user?.name} </h4>
              <p>Jan Sun 25 2024</p>
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

          <div
            className="navigation"
            style={{
              width: "100%",
              margin: "2rem",
            }}
          >
            <NavLink className="Link nav-link" to={"myPost"}>
              My Post
            </NavLink>
            <NavLink className="Link nav-link" to={"saved"}>
              Saved Post
            </NavLink>

            <NavLink className="Link nav-link" to={"add-info"}>
              Add More Info
            </NavLink>
          </div>
          <div className="posts" style={{ margin: "2rem 0" }}>
            <Outlet></Outlet>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
