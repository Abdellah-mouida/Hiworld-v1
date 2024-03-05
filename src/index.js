import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//Font Awsome
import "./Style/all.css";
import "./Style/all.min.css";
//Style
import "./Style/base.css";
import "./Style/auth.css";
import "./Style/nav.css";
import "./Style/posts.css";
import "./Style/create-post.css";
import "./Style/filepond.css";
import "./Style/post.css";
import "./Style/profile.css";
import "./Style/comment.css";
import "./Style/message.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
