import React from "react";

function Welcome() {
  return (
    <div className="welcome">
      <h1>
        {" "}
        <span>
          <i className="fa-solid fa-earth-americas"></i> Hi
        </span>
        world
      </h1>
      <a href="/home">
        <button>Get Started</button>
      </a>
    </div>
  );
}

export default Welcome;
