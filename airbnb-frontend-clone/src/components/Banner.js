import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";
function Banner() {
  const [showSearch, setSearch] = useState(false);
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setSearch(!showSearch)}
          className="banner__dates"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h2>Get out and stretch your imagination</h2>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>

        <Button onClick={() => history.push("/search")}>Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
