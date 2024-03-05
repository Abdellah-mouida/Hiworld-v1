import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Sing from "./Pages/Auth/Singin";
import Home from "./Pages/Home/Home";
import Posts from "./Pages/Home/Posts";
import Chat from "./Pages/Home/Chat";
import CreatePost from "./Pages/Home/CreatePost";
import LosePage from "./Provider/LosePage";
import Profile from "./Pages/Home/Profile";
import RequireAuth from "./Provider/RequireAuth";
import MyPosts from "./Pages/Home/Profile/MyPost";
import Saved from "./Pages/Home/Profile/Saved";
import LoseProfile from "./Provider/LoseProfile";
import MoreInfo from "./Pages/Home/Profile/MoreInfo";
import PrivetChatRoom from "./Pages/Home/CreatePrivetChateRoom";
import ChatRoom from "./Pages/Home/ChatRoom";
import ChatProvider from "./Provider/ChatProvider";
import ChatRoomPassword from "./Pages/Home/ChatRoomPassword";
import PublicProfile from "./Pages/Home/PublicProfile";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "./base/CookieName";
let App = () => {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/home/*" element={<LosePage></LosePage>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sing" element={<Sing></Sing>}></Route>
        <Route element={<RequireAuth></RequireAuth>}>
          <Route path="/" element={<Home></Home>}>
            <Route
              path="/profile/user/:serial_code"
              element={<PublicProfile></PublicProfile>}
            ></Route>
            <Route path="/profile" element={<Profile></Profile>}>
              <Route
                path="/profile/myPost"
                element={<MyPosts></MyPosts>}
              ></Route>
              <Route path="/profile/saved" element={<Saved></Saved>}></Route>
              <Route
                path="/profile/add-info"
                element={<MoreInfo></MoreInfo>}
              ></Route>
            </Route>
            <Route path="/home" element={<Posts></Posts>}></Route>
            <Route path="/chat" element={<Chat path="chat"></Chat>}></Route>
            <Route
              path="/chat-room"
              element={<PrivetChatRoom></PrivetChatRoom>}
            ></Route>
            <Route element={<ChatProvider></ChatProvider>}>
              <Route
                path="/chat-room/room/:id"
                element={<ChatRoom></ChatRoom>}
              ></Route>
            </Route>
            <Route
              path="/chat-room/password"
              element={<ChatRoomPassword></ChatRoomPassword>}
            ></Route>

            <Route
              path="/create-post"
              element={<CreatePost></CreatePost>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
