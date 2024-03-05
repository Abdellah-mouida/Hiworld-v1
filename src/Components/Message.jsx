let Message = (props) => {
  console.log(props);
  return (
    <div className="message">
      <div
        className="msg-img img-c"
        style={{
          backgroundImage: `url(${props?.user?.profile})`,
        }}
      ></div>
      <div className="msg-info">
        <div className="f-colum">
          <h4>{props?.user?.name}</h4>
        </div>
        <p className="msg-content">{props?.message} </p>
        <small> {new Date(props?.createdAt).toUTCString().slice(0, -7)} </small>
      </div>
    </div>
  );
};
export default Message;
