import React, { useState, useEffect } from "react";
import "../style.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="flex row-auto justify-between">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <div className="flex row-auto justify-between ml-10">
          <h3 className="text-white mr-6 font-bold">Home</h3>
          <h3 className="text-white mr-6">TV Shows</h3>
          <h3 className="text-white mr-6">Movies</h3>
          <h3 className="text-white mr-6">New & Popular</h3>
          <h3 className="text-white mr-6">My List</h3>
        </div>
      </div>

      <div className="flex row-auto items-center">
        <i className="fas fa-search text-white items-center text-xl mr-4"></i>
        <h5 className="text-white items-center text-md mr-6">Kids</h5>
        <i className="fas fa-bell text-white items-center text-xl mr-8"></i>
        <img
          className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
        <i className="fas fa-sort-down text-white text-md mt-2 ml-2"></i>
      </div>
    </div>
  );
};

export default Nav;
