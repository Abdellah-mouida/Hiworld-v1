let CommentElementREV = (props) => {
  return (
    <>
      <div className="comment c-rev">
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
            <p className="comment-content">{props?.content}</p>
          </div>
        </header>
      </div>
    </>
  );
};
export default CommentElementREV;
