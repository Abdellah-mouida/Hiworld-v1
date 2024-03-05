import { useState } from "react";
import Axios from "../../base/Axios";
import { CleaningServices } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../../base/CookieName";

let PrivetChatRoom = () => {
  let [response, setRes] = useState({});
  let id = new Cookies().get(HIWORLD_COOKIE_NAME);
  let [form, setForm] = useState({
    roomName: "",
    roomType: "",
    roomLimit: "",
    roomPassword: "",
  });
  let changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  let cheack = () => {
    if (form.roomType === "public") {
      return {
        creator: id,
        roomName: form.roomName,
        roomType: "public",
      };
    } else {
      return { ...form, creator: id };
    }
  };
  let create = async () => {
    try {
      let res = await Axios.post("/chat/chat-room", cheack());
      setRes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(response);
  return (
    <div className="container">
      <h2>Create Your Own Chat Room</h2>
      <div className="f-colum" style={{ gap: "20px" }}>
        <div className="form-controle">
          <label htmlFor="">Room Name</label>
          <input
            type="text"
            name="roomName"
            onChange={changeForm}
            placeholder="Enter You Room Name"
          />
        </div>
        <div className="form-controle">
          <label htmlFor="">Room Type</label>
          <select onChange={changeForm} name="roomType">
            <option value="" disabled selected>
              Room Type
            </option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        {form.roomType === "private" && (
          <>
            <div className="form-controle">
              <label htmlFor="">Limit</label>
              <select onChange={changeForm} name="roomLimit">
                <option value="" selected disabled>
                  Limition
                </option>
                <option value="1">1</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="more">More than 10</option>
              </select>
            </div>
            <div className="form-controle">
              <label htmlFor="">Password</label>
              <input
                name="roomPassword"
                type="password"
                onChange={changeForm}
                placeholder="Give it a Password"
              />
            </div>
          </>
        )}
        <div className="f-end">
          <button onClick={create}>Create</button>
        </div>
        {response?._id && (
          <Link className="f-center" to={"/chat-room/room/" + response._id}>
            <button>Click to go to Your Chat Room</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default PrivetChatRoom;
