import React from "react";
import "./SearchPage.css";
import Navbar from "./Navbar";
import { Button } from "@material-ui/core";
import SearchCard from "./SearchCard";
function SearchPage() {
  return (
    <div className="searchpage">
      <Navbar />
      <div className="searchpage__info">
        <p>62+ stays · 26 august to 30 august · 2 guest </p>
        <h1>Stays nearby</h1>
        <Button>Cancellation flexiblity </Button>
        <Button>Entire place</Button>
        <Button>Price</Button>
        <Button>Instant Book</Button>
        <Button>More filters</Button>

        <SearchCard
          imgurl="https://a0.muscache.com/im/pictures/3dde15b3-e0af-4150-82d9-6ae040aec356.jpg?aki_policy=x_large"
          desc="3 guests · Studio · 2 beds · 1 bathroom"
          title="Lo Scoglio "
          rating={4.89}
          price="₹1,747/ night"
          total="₹11,200"
          location="Spain"
        />
        <SearchCard
          imgurl="https://a0.muscache.com/im/pictures/1ad2ac7d-5619-4dd5-b05e-a9a2daa1fff6.jpg?aki_policy=x_large"
          desc="2 guests · 1 bedroom · 1 bed · 1 bathroom"
          title="Villa en Luberon"
          rating={4.25}
          price="₹2,745/ night"
          total="₹13,200"
          location="Austrailia,Sydney"
        />
        <SearchCard
          imgurl="https://a0.muscache.com/im/pictures/36895058/78f6323f_original.jpg?aki_policy=x_large"
          desc="8 guests · Studio · 2 beds · 1 bathroom · Parking · Lawn"
          title="Oia Home II in the heart of Oia!"
          rating={4.98}
          price="₹7,747/ night"
          total="₹53,200"
          location="New Zealand"
        />
        <SearchCard
          imgurl="https://a0.muscache.com/im/pictures/ced33457-1b49-4839-8275-b3451cf24def.jpg?aki_policy=x_large"
          desc="5 guests · Studio · 5 beds · 3 bathroom · Free Parking · Ground"
          title="The Panorama Studio"
          rating={4.68}
          price="₹9,747/ night"
          total="₹83,200"
          location="Parno Greece"
        />
        <SearchCard
          imgurl="https://a0.muscache.com/im/pictures/7dfcfdef-a0c5-42da-b2a0-0ea1bdaa74de.jpg?aki_policy=x_large"
          desc="1 guests · 1 beds · 1 Bathrrom"
          title="The Panorama Studio"
          rating={4.12}
          price="₹747/ night"
          total="₹3,200"
          location="Greece"
        />
        <SearchCard
          imgurl="https://a0.muscache.com/im/pictures/3babad6e-ef74-4442-8f24-12a720957781.jpg?aki_policy=x_large"
          desc="4 guests · 4 beds · 4 Bathrrom"
          title="Self Contained Cabin - great view!"
          rating={4.12}
          price="₹947/ night"
          total="₹4,200"
          location="Greece"
        />
      </div>
    </div>
  );
}

export default SearchPage;
