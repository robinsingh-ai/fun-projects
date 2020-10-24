import React from "react";
import "./SearchCard.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarRateIcon from "@material-ui/icons/StarRate";
function SearchCard({ imgurl, title, desc, rating, price, total, location }) {
  return (
    <div className="searchcard">
      <img src={imgurl} alt="card img" />
      <FavoriteBorderIcon className="searchpage__fav" />
      <div className="searchcard__info">
        <div className="searchcard__infotop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{desc}</p>
        </div>
        <div className="searchcard__infobot">
          <div className="searccard__rating">
            <StarRateIcon />
            <p>
              <strong>{rating}</strong>
            </p>
          </div>

          <div className="searchcard__price">
            <h3>{price}</h3>
            <p>{total}/total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
