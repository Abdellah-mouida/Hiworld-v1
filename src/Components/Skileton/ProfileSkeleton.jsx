import React from "react";

function ProfileSkeleton() {
  return (
    <div className="container skelton">
      <div className="profile" style={{ marginTop: "2rem" }}>
        <header>
          {/* <div className="profile-img img-c">
            <i className="fas fa-pen"></i>
          </div> */}

          <div
            style={{
              width: "30vmin",
              height: "30vmin",
              fontSize: "20vmin",
              backgroundColor: "",
              overflow: "visible",
            }}
            className="profile-img"
          ></div>

          <div className="user-info">
            <h4> </h4>
            <p></p>
          </div>
        </header>
        <div className="follows">
          <div className="box">
            <h4 className="box-title"></h4>
            <p> </p>
          </div>
          <div className="box">
            <h4 className="box-title"></h4>
            <p> </p>
          </div>
          <div className="box">
            <h4 className="box-title"></h4>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSkeleton;
