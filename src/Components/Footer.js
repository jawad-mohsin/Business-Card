import React from "react";
import twitterIcon from "../Icons/Twitter Icon.png";
import fbIcon from "../Icons/Facebook Icon.png";
import instaIcon from "../Icons/Instagram Icon.png";
import gitIcon from "../Icons/GitHub Icon.png";

export default function Footer() {
  return (
    <footer className="foot">
      <img className="twitter--icon" src={twitterIcon} alt="" />
      <img className="fb--icon" src={fbIcon} alt="" />
      <img className="insta--icon" src={instaIcon} alt="" />
      <img className="git--icon" src={gitIcon} alt="" />
    </footer>
  );
}
