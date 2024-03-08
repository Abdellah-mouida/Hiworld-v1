import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Axios from "../base/Axios";
import { useRef, useState } from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";

let Post = (props) => {
  return (
    <div className="post f-colum" ref={props.postRef}>
      <header>
        {props.user.profile ? (
          <Link
            to={
              props?.user?._id !== props?.currentUser
                ? "/profile/user/" + props?.user?.SERIAL_CODE
                : "/profile/myPost"
            }
            className="post-profile"
            style={{
              backgroundImage: `url(${props?.user.profile})`,
            }}
          ></Link>
        ) : (
          <Link
            to={
              props?.user?._id !== props?.currentUser
                ? "/profile/user/" + props?.user?.SERIAL_CODE
                : "/profile"
            }
            className="post-profile Link"
          >
            {" "}
            {props?.user && props?.user?.name?.at(0)}
          </Link>
        )}
        <div className="post-info f-colum">
          <h4>
            {props?.user?.name}{" "}
            {!props.showBtn ? (
              props?.user?._id !== props.currentUser ? (
                props?.user?.followers?.includes(props.currentUser) ? (
                  <button
                    className="btn-des"
                    onClick={() => props.unfollow(props?.user?._id)}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => props.follow(props?.user?._id)}>
                    Follow
                  </button>
                )
              ) : (
                ""
              )
            ) : (
              ""
            )}{" "}
          </h4>
          <p>{new Date(props.createdAt).toDateString()} </p>
        </div>
      </header>
      {props?.description && <p className="post-desc">{props?.description}</p>}
      {props?.image && (
        <div
          className="post-img"
          style={{
            backgroundImage: `url(${props?.image})`,
          }}
        ></div>
      )}

      <div className="post-action">
        {props?.howLikeIt?.find((user) => user === props.currentUser) ? (
          <p onClick={() => props.DisLike(props?.id)}>
            <i className="fas fa-thumbs-up"></i>
            <span>Likes </span>({props?.howLikeIt?.length})
          </p>
        ) : (
          <p onClick={() => props.Like(props?.id)}>
            <i className="fa-regular fa-thumbs-up"></i>
            <span>Likes </span>({props?.howLikeIt?.length})
          </p>
        )}
        {/* <p onClick={() => setOpen((p) => !p)}>
          <i className="fa-regular fa-comment"></i>
          Comments ({props?.comments || 0})
        </p> */}
        <Comment postId={props.id}></Comment>
        {/* <dialog className="dialog" open={open}>
          <div className="container">
            <h2>Hello,world</h2>
          </div>
        </dialog> */}
        {props?.saver?.includes(props.currentUser) ? (
          <p onClick={() => props?.handleRemoveFromSaved(props?.id)}>
            <i className="fas fa-bookmark"></i> <span>Saved</span>
          </p>
        ) : (
          <p onClick={() => props?.handleAddToSaved(props?.id)}>
            <i className="fa-regular fa-bookmark"></i>
            <span>Add to Saved</span>
          </p>
        )}
      </div>
      <hr />
    </div>
  );
};
export default Post;
