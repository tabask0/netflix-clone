import React from "react";
import "../style.css";
import { useHistory } from "react-router-dom";
import App from "../App";

export function Welcome() {
  const history = useHistory();
  const goHome = () => history.push("netflix-clone/app");

  return (
    <div className="welcome">
      <img
        className="logo pl-10 pt-4"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <div className="content flex justify-center items-center">
        <h1 className="text-white text-7xl">Who's watching?</h1>
        <div className="flex row-auto justify-center items-center">
          <div className=" flex-col justify-center content">
            <img
              className="content-avatar mt-10 rounded hover:border-4 hover:border-white cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="avatar"
              onClick={goHome}
            />{" "}
            <h3 className="text-gray-400 mt-2 text-2xl">Bucur</h3>
          </div>
          <i
            style={{ width: "9.7vw", height: "9.7vw" }}
            className="fas fa-plus-circle text-9xl flex cursor-pointer justify-center items-center p-6 text-gray-400 mt-8 ml-10 rounded hover:bg-white"
          ></i>
        </div>
        <h2 className="profile-title">Manage Profiles</h2>
      </div>
    </div>
  );
}

export default Welcome;
