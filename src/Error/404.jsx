import { Link } from "react-router-dom";

let NotFound = (props) => {
  return (
    <div className="container" style={{ padding: "3rem 0" }}>
      <h2 style={{ color: "#ff2222" }}>
        Oppss, it seems like You lose Your Page !!
      </h2>
      <div className="f-center" style={{ gap: "15px", margin: "2rem 0" }}>
        <Link to={"/home"}>
          <button>Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
