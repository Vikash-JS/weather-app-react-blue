import React from "react";

const Header = (props) => {
  return (
    <div>
      <div
        style={{
          gap: "10px",
          fontSize: "30px"
        }}
        className="align-center"
      >
        <img
          style={{ width: "60px" }}
          src={"https://www.feirox.com/rivu/2016/04/Klara-1-1.png"}
          alt="app-header-logo"
        />
        <p>Current Weather</p>
      </div>
      <br />
      <div
        className="align-center"
        style={{
          gap: "20px"
        }}
      >
        <img
          style={{ cursor: "pointer", width: "30px" }}
          src="https://img.icons8.com/ios-filled/50/000000/marker.png"
          alt="location access"
        />
        <input
          style={{ borderRadius: "5px", padding: "5px" }}
          onKeyUp={(e) =>
            e.key === "Enter" && e.target.value !== ""
              ? props.getLocation(e)
              : null
          }
          placeholder="city..."
        />
      </div>
      <p>{props.errorLoading ? "Ops, something went wrong" : null}</p>
    </div>
  );
};

export default Header;
