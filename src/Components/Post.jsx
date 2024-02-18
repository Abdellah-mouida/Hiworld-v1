import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

let Post = (props) => {
  return (
    <div className="post f-colum">
      <header>
        <div className="post-profile"></div>
        <div className="post-info f-colum">
          <h4>{props?.user?.name} </h4>
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
        <p>
          <i className="fa-regular fa-thumbs-up"></i>
          Likes ({props?.likes})
        </p>
        <p>
          <i className="fa-regular fa-comment"></i>Comments (
          {props?.comments || 0})
        </p>{" "}
        <p>
          <i className="fa-regular fa-bookmark"></i>Add to Saved
        </p>
      </div>
      <hr />
    </div>
  );
};
export default Post;
