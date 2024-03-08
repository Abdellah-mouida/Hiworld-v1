import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CommentElement from "./CommentElement";
import Axios from "../base/Axios";
import Cookies from "universal-cookie";
import { HIWORLD_COOKIE_NAME } from "../base/CookieName";
import CommentElementREV from "./CommentElementREV";
import { Close } from "@mui/icons-material";
import Loading from "./Loading/Loading";

let Comment = (props) => {
  let [comments, setComments] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  let id = new Cookies().get(HIWORLD_COOKIE_NAME);
  let [render, setRender] = React.useState(false);
  let [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    Axios.get("/comments/" + props.postId)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);

  const handleClickOpen = async () => {
    // try {
    //   let res = await Axios.get("/comments/" + props.postId);
    //   setComments(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let [comment, setComment] = React.useState("");

  let createPost = async () => {
    if (!comment) return;
    try {
      let res = await Axios.post("/comments", {
        content: comment,
        user: id,
        post: props.postId,
      });
      setComment("");
      setRender((p) => !p);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      {
        <p onClick={handleClickOpen}>
          <i className="fa-regular fa-comment"></i>
          <span>Comments</span>
        </p>
      }
      <Dialog
        open={open}
        onClose={handleClose}
        className="comment-dialoge"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialog-container">
          <button style={{ opacity: comment && 1 }} onClick={createPost}>
            {" "}
            <i className="fas fa-paper-plane"></i>{" "}
          </button>
          <h2>Comments</h2>

          <div className="comments">
            {comments?.map((m, i) =>
              m?.user?._id === id ? (
                <CommentElementREV
                  user={m.user}
                  content={m.content}
                  key={i}
                  isMine={m.user._id === id}
                  createdAt={m.createdAt}
                ></CommentElementREV>
              ) : (
                <CommentElement
                  user={m.user}
                  content={m.content}
                  key={i}
                  isMine={m.user._id === id}
                  createdAt={m.createdAt}
                ></CommentElement>
              )
            )}
          </div>
          <div className="create-comment">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="What Do You think ? "
            ></textarea>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};
export default Comment;

{
  /*     <DialogTitle id="alert-dialog-title">
      {"Use Google's location service?"}
    </DialogTitle><DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */
}
