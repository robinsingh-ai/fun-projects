import React from "react";
import "./Category.css";
function Category({ imgurl, title }) {
  return (
    <div className="category">
      <img src={imgurl} alt="category img" />
      <h3>{title}</h3>
    </div>
  );
}

export default Category;
