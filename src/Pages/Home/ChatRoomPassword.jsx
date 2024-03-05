import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "../../base/Axios";
import Error from "../../Components/Error";

let ChatRoomPassword = (props) => {
  let [pwd, setPwd] = useState("");
  let nav = useNavigate();
  let loc = useLocation();
  let [err, setErr] = useState("");
  let id = loc.state;
  let enter = async () => {
    try {
      let res = await Axios.post("/validate/chat-room/" + id + "/password", {
        password: pwd,
      });
      nav("/chat-room/room/" + id, { state: true });
    } catch (err) {
      if (err?.response.status === 401) {
        setErr("Wrong Password");
      }
      console.log(err);
    }
  };
  return (
    <div className="container">
      <h2>Password</h2>

      <div
        className="form-controle"
        style={{
          height: "500px",
          justifyContent: "center",
          width: "80%",
          margin: "0 auto",
          gap: "30px",
        }}
      >
        <div className="f-colum">
          <label htmlFor="">Room Password</label>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <div style={{ padding: "1rem 0" }}>
            {err && <Error err={err}></Error>}
          </div>
        </div>
        <button onClick={enter}>Enter</button>
      </div>
      <div className="f-end"></div>
    </div>
  );
};
export default ChatRoomPassword;
