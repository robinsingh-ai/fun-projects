import React from "react";
import "./Card.css";
import Rating from "@material-ui/lab/Rating";
import StarRateIcon from "@material-ui/icons/StarRate";
function Card({ imgurl, title, desc, price, rating, star }) {
  return (
    <div className="card">
      <img src={imgurl} alt="card img" />
      <div className="card__info">
        {rating ? (
          <Rating
            className="card__rating"
            name="read-only"
            value={rating}
            readOnly
            size="small"
            precision={0.5}
          />
        ) : (
          <p></p>
        )}

        {star ? (
          <p className="card__stars">
            <StarRateIcon /> {star}{" "}
          </p>
        ) : (
          <p></p>
        )}
        <h2>{title}</h2>
        <h5>{desc}</h5>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
