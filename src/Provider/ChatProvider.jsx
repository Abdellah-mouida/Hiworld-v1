import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import Axios from "../base/Axios";
import ChatRoomErr from "../Error/ChatRoomErr";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../base/CookieName";

let ChatProvider = () => {
  let { id } = useParams();
  let userId = new Cookies().get(HIWORLD_COOKIE_NAME);
  let [room, setRoom] = useState({});
  let [err, setErr] = useState("");
  useEffect(() => {
    Axios.post("/chat/chat-room/" + id, { userId })
      .then((res) => {
        setRoom(res.data);
      })
      .catch((err) => setErr(err?.response?.data));
  }, []);

  let loc = useLocation();

  return !err ? (
    room.roomType === "private" && !loc.state ? (
      <Navigate to={"/chat-room/password"} state={id}></Navigate>
    ) : (
      <Outlet></Outlet>
    )
  ) : (
    <ChatRoomErr err={err}></ChatRoomErr>
  );
};
export default ChatProvider;
