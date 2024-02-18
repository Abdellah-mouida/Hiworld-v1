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

let App = () => {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/home/*" element={<LosePage></LosePage>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sing" element={<Sing></Sing>}></Route>
        <Route path="/" element={<Home></Home>}>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/home" element={<Posts></Posts>}></Route>
          <Route path="/chat" element={<Chat></Chat>}></Route>
          <Route
            path="/create-post"
            element={<CreatePost></CreatePost>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
