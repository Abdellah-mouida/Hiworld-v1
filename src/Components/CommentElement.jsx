let CommentElement = (props) => {
  return (
    <>
      <div className="comment">
        <header>
          <div
            className="comment-user-img img-c"
            style={{
              backgroundImage: `url(${props?.user?.profile})`,
            }}
          ></div>
          <div className="f-colum">
            <div className="comment-info">
              <h3>{props?.user?.name} </h3>
              <p> {new Date(props?.createdAt).toDateString()}</p>
            </div>
            <p
              className="comment-content"
              style={{
                backgroundColor: props?.isMine ? "#0033ff88" : "#eeeeeed9",
              }}
            >
              {props?.content}
            </p>
          </div>
        </header>
      </div>
    </>
  );
};
export default CommentElement;
