import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "60vh",
        background: "#111",
      }}
      className="flex flex-row justify-center items-center"
    >
      <div className="p-20">
        <div className="mb-4">
          <i
            style={{ color: "#808080" }}
            className="fab fa-facebook-square  mr-4 text-3xl"
          ></i>
          <i
            style={{ color: "#808080" }}
            className="fab fa-instagram  mr-4 text-3xl"
          ></i>
          <i
            style={{ color: "#808080" }}
            className="fab fa-youtube  mr-4 text-3xl"
          ></i>
        </div>
        <div>
          <h3
            style={{ color: "#808080" }}
            className=" mb-2 font-extralight text-sm"
          >
            Audio and Subtitles
          </h3>
          <h3
            style={{ color: "#808080" }}
            className=" mb-2 font-extralight text-sm"
          >
            Media Center
          </h3>
          <h3
            style={{ color: "#808080" }}
            className=" mb-2 font-extralight text-sm"
          >
            Privacy
          </h3>
          <h3
            style={{ color: "#808080" }}
            className=" mb-2 font-extralight text-sm"
          >
            Contact Us
          </h3>
          <h2
            style={{
              color: "#808080",
              border: "1px solid #808080",
              paddingTop: "6px",
              paddingBottom: "6px",
              marginTop: "30px",
            }}
            className="font-extralight text-sm w-24 items-center flex justify-center"
          >
            Service Code
          </h2>
          <h6
            style={{ color: "#808080" }}
            className="mb-2 mt-6 font-extralight text-sm"
          >
            Ⓒ 1997-2021 Netflix, Inc.
          </h6>
        </div>
      </div>
      <div className="p-20">
        <h3
          style={{ color: "#808080" }}
          className=" mb-2 font-extralight text-sm"
        >
          Audio Description
        </h3>
        <h3
          style={{ color: "#808080" }}
          className=" mb-2 font-extralight text-sm"
        >
          Investor Relations
        </h3>
        <h3
          style={{ color: "#808080" }}
          className=" mb-2 font-extralight text-sm"
        >
          Legal Notices
        </h3>
      </div>
      <div className="p-20">
        <h3
          style={{ color: "#808080" }}
          className=" mb-2 font-extralight text-sm"
        >
          Help Center
        </h3>
        <h3
          style={{ color: "#808080" }}
          className=" mb-2 font-extralight text-sm"
        >
          Jobs
        </h3>
        <h3
          style={{ color: "#808080" }}
          className=" mb-2 font-extralight text-sm"
        >
          Cookie Preferences
        </h3>
      </div>
      <div className="p-20">
        <h3
          style={{ color: "#808080" }}
          className=" mb-2 font-extralight text-sm"
        >
          Gift Cards
        </h3>
        <h3
          style={{ color: "#808080" }}
          className=" mb-2 font-extralight text-sm"
        >
          Terms of Use
        </h3>
        <h3
          style={{ color: "#808080" }}
          className="mb-2 font-extralight text-sm"
        >
          Corporate Information
        </h3>
      </div>
    </div>
  );
};

export default Footer;
