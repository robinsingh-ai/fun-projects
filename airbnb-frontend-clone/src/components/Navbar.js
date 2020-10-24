import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="airbnb logo"
        />
      </Link>

      <div className="navbar__middle">
        <input type="text" placeholder="start your search" />
        <SearchIcon />
      </div>

      <div className="neavbar__right">
        <p className="navbarright__left">Become a host</p>
        <div className="navbarright__middle">
          <LanguageIcon />
          <ExpandMoreIcon />
        </div>
        <div className="navbarright__right">
          <MenuIcon />
          <Avatar className="navbarright__rightavatar" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
