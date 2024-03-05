import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chat from "./Chat";
import Axios from "../../base/Axios";

let ChatRoom = (props) => {
  let { id } = useParams();
  let [data, setData] = useState({});
  useEffect(() => {
    Axios.get("/chat/chat-room/" + id).then((res) => setData(res.data));
  }, []);
  return <Chat data={data} path={"chat/chat-room/" + id + "/messages"}></Chat>;
};
export default ChatRoom;
