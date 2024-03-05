import { useEffect, useRef, useState } from "react";
import Message from "../../Components/Message";
import MessageRev from "../../Components/Message rev";
import Axios from "../../base/Axios";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../../base/CookieName";

let Chat = (props) => {
  let [msg, setMsg] = useState("");
  let [chats, setChats] = useState([]);
  let [render, setReneder] = useState(false);
  let scroller = useRef(null);
  let messageContainer = document.getElementById("messages-container");

  useEffect(() => {
    Axios.get("/" + props.path)
      .then((res) => {
        setChats(res.data);
        messageContainer.scrollTo(0, messageContainer.scrollHeight);
      })
      .catch((err) => console.log(err));
  }, [render]);
  let id = new Cookies().get(HIWORLD_COOKIE_NAME);
  let send = async () => {
    try {
      let res = await Axios.post("/" + props.path, {
        id: id,
        message: msg,
      });
      setReneder((p) => !p);
      setMsg("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container chat">
      {props?.data && <div className="f-center"></div>}
      <h2>Chat</h2>
      <div className="messages" id="messages-container">
        {chats?.map((m, i) =>
          m?.user?._id === id ? (
            <MessageRev
              user={m.user}
              message={m.message}
              key={i}
              createdAt={m.createdAt}
            ></MessageRev>
          ) : (
            <Message
              user={m.user}
              message={m.message}
              key={i}
              createdAt={m.createdAt}
            ></Message>
          )
        )}
      </div>
      <div className="create-msg">
        <input
          type="text"
          value={msg}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          onChange={(e) => setMsg(e.target.value)}
        />
        <i onClick={send} className="fas fa-paper-plane"></i>
      </div>
    </div>
  );
};
export default Chat;
