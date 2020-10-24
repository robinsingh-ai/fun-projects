import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <div className="home__cards">
        <Link to="/" className="homecards__link">
          <Card
            imgurl="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=320"
            title="Online Experiences"
            desc="Unique activities we can do together, led by a world of hosts"
          />
        </Link>

        <Link to="/uniquestay" className="homecards__link">
          <Card
            imgurl="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
            title="Unique stays"
            desc="Spaces that are more than just a place to sleep."
          />
        </Link>
        <Link to="/search" className="homecards__link">
          <Card
            imgurl="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320"
            title="Entire Homes"
            desc="Comfortable private places,with room for friends and family"
          />
        </Link>
      </div>

      <div className="home__cards">
        <Card
          imgurl="https://a0.muscache.com/im/pictures/56d7fa4b-8b94-4635-a885-40e7c23d101a.jpg?aki_policy=x_large"
          title="Entire bungalow hosted by Robin"
          desc="Bungalow situated on one acre of land, 2.5 Kms from Goa Beach. Has a lot of trees, lawn and greenery. Also has a spacious sit-out verandah with a wide view all around"
          price="₹1999/night"
          rating="4.5"
        />
        <Card
          imgurl="https://a0.muscache.com/im/pictures/268ecea2-c006-4524-8b13-502c88133c30.jpg?aki_policy=x_large"
          title="Brilliantly Restored Cottage"
          desc="A completely redesigned cottage with a sit out in a quaint village pocket within the Bandra Area."
          price="₹5999/night"
          rating="4.95"
        />
        <Card
          imgurl="https://a0.muscache.com/im/pictures/60dcd026-419d-4a06-a096-f5b676c8bda6.jpg?aki_policy=x_large"
          title="The #SoBo Studio"
          desc="Nestled in the heart of Mumbai's heritage South Bombay (SOBO) area, the Sobo Studio is a luxurious, peaceful abode to call home"
          price="₹2599/night"
          rating="4"
        />
      </div>
    </div>
  );
}

export default Home;
