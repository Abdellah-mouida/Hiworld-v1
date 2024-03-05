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
  let messageContainer = useRef(null);

  if (messageContainer?.current) {
    messageContainer.current.scrollTo({
      top: messageContainer.current.scrollHeight + 100,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    Axios.get("/" + props.path)
      .then((res) => {
        setChats(res.data);
        setTimeout(() => {
          if (messageContainer?.current) {
            messageContainer.current.scrollTo({
              top: messageContainer.current.scrollHeight + 100000,
              behavior: "smooth",
            });
          }
        }, 0);
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
  // useEffect(() => {
  //   setShouldScroll((p) => p);
  // }, [render]);

  return (
    <div className="container chat">
      {props?.data && <div className="f-center"></div>}
      <h2>Chat</h2>
      <div className="messages" id="messages-container" ref={messageContainer}>
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
