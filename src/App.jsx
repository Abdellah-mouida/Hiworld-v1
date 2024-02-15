import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Sing from "./Pages/Auth/Singin";
import Home from "./Pages/Home/Home";

let App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sing" element={<Sing></Sing>}></Route>
      </Routes>
    </div>
  );
};

export default App;
