import React, { useState } from "react";
import ReactDOM from "react-dom";

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";
import FilePondPluginFileEncode from "filepond-plugin-file-encode/dist/filepond-plugin-file-encode.min.js"; // Import the plugin

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-image-resize/dist/filepond-plugin-image-resize.js";
import Cookies from "universal-cookie";
import Axios from "../../base/Axios";
import Error from "../../Components/Error";

// Register the plugins
let CreatePost = () => {
  let cookie = new Cookies();
  let id = cookie.get("hiworld-user-id");

  let [err, setErr] = useState("");

  registerPlugin(
    FilePondPluginFileEncode,
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview
  );
  let [form, setForm] = useState({
    user: id,
    descritpion: "",
    image: "",
  });

  let handelCreatePost = async (e) => {
    e.preventDefault();
    try {
      let res = await Axios.post("/posts", form);
      console.log(res);
      // window.location.pathname = "/home";
    } catch (err) {
      if (err.response.status === 400) {
        setErr(err.response.data);
      } else {
        setErr("Internal Server Error");
      }
    }
  };

  return (
    <div className="container create-post">
      <h2>Create Post</h2>
      <div className=" form-container">
        <div className="form-controle">
          <label htmlFor="">Description Or Note</label>
          <textarea
            name="descrition"
            value={form.descritpion}
            onChange={(e) => {
              setForm({ ...form, descritpion: e.target.value });
            }}
          ></textarea>
        </div>
        Post Image
        <FilePond
          allowMultiple={false}
          maxFiles={1}
          name="image"
          onaddfile={(error, file) => {
            if (!error) {
              setForm({ ...form, image: file.getFileEncodeDataURL() });
            } else {
              console.error("File processing error:", error);
            }
          }}
          allowFileEncode={true}
          allowImagePreview={true}
          fileEncodeBase64String={true} // Set this to true to return the file as base64 encoded string
          labelIdle='Drag & Drop you Image Here, or <span class="filepond--label-action">Browse</span>'
        />
        {err && <Error err={err}></Error>}
        <div style={{ margin: "0.5rem" }} className="f-end">
          <button onClick={handelCreatePost}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
