let Error = (props) => {
  return (
    <small style={{ display: "flex" }} className="error">
      {" "}
      <i className="fa-solid fa-triangle-exclamation"></i> {props.err}{" "}
    </small>
  );
};
export default Error;
