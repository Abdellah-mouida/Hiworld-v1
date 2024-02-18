import { Avatar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Axios from "../../base/Axios";
import Post from "../../Components/Post";
import Cookies from "universal-cookie";

let Profile = () => {
  let [user, setUser] = useState({});
  let cookie = new Cookies();
  let id = cookie.get("hiworld-user-id");
  let [fileChanged, setFileChanged] = useState(false);
  let inp = useRef(null);
  useEffect(() => {
    Axios.get("/user/" + id).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
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
      <div className="profile" style={{ marginTop: "2rem" }}>
        <header>
          {/* <div className="profile-img img-c">
            <i className="fas fa-pen"></i>
          </div> */}
          <input type="file" hidden ref={inp} onChange={handleChangeProfile} />
          {user?.profile ? (
            <Avatar
              sx={{
                width: "30vmin",
                height: "30vmin",
                fontSize: "20vmin",
                backgroundImage: `url(${user.profile})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                overflow: "visible",
              }}
              className="profile-img"
            >
              <i className="fas fa-pen" onClick={() => inp.current.click()}></i>
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
              <i className="fas fa-pen" onClick={() => inp.current.click()}></i>

              {user?.name && user.name[0]}
            </Avatar>
          )}
          <div className="user-info">
            <h4>{user.name} </h4>
            <p>Jan Sun 25 2024</p>
          </div>
        </header>
        <div className="friends"></div>
        <div className="posts" style={{ margin: "2rem 0" }}>
          {user?.posts?.map((m, i) => (
            <Post
              user={m.user}
              createdAt={m.createdAt}
              image={m.image}
              description={m.description}
              likes={m.likes}
            ></Post>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Profile;
