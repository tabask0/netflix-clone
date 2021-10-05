import React from "react";

const Footer = () => {
  return (
    <div
      style={{ width: "100%", height: "32vw" }}
      className="flex flex-row justify-center items-center p-40 text-gray-400"
    >
      <div className="">
        facebook insta youtube
        <div>
          <h3>Audio and Subtitles</h3>
          <h3>Media Center</h3>
          <h3>Privacy</h3>
          <h3>Contact Us</h3>
          <h2>Service Code</h2>
        </div>
      </div>
      <div>
        <h3>Audio Description</h3>
        <h3>Investor Relations</h3>
        <h3>Legal Notices</h3>
      </div>
      <div>
        <h3>Help Center</h3>
        <h3>Jobs</h3>
        <h3>Cookie Preferences</h3>
      </div>
      <div>
        <h3>Gift Cards</h3>
        <h3>Terms of Use</h3>
        <h3>Corporate Information</h3>
      </div>
    </div>
  );
};

export default Footer;
