import React from "react";
import "./UniquesSearchpage.css";

import Navbar from "./Navbar";
import Category from "./Category";
import Card from "./Card";
function UniqueSearchPage() {
  return (
    <div className="uniquesSearchpage">
      <Navbar />
      <div className="uniquepage__banner">
        <div className="uniquepage__bannerinfo">
          <h2>Unique stays</h2>
          <h5>
            Boats, treehouses, and more – these spaces are more than just a
            place to sleep.
          </h5>
        </div>
      </div>
      <div className="uniquepage__categories">
        <h2>Explore all type of unique places</h2>
        <div className="uniquepage__category">
          <Category
            imgurl="https://a0.muscache.com/im/pictures/175f945a-a4ac-416c-bb10-7e49a927c42f.jpg?im_w=320"
            title="Treehouses"
          />
          <Category
            imgurl="https://a0.muscache.com/im/pictures/6568b09d-99ee-4f49-b9ca-afb90893d030.jpg?im_w=320"
            title="Boats"
          />
          <Category
            imgurl="https://a0.muscache.com/im/pictures/6eb16f8e-dae4-4ae8-86bf-f6da87abc25e.jpg?im_w=320"
            title="Motorhomes"
          />
          <Category
            imgurl="https://a0.muscache.com/im/pictures/a7450c1a-0562-4254-b6c9-ff2910d14fec.jpg?im_w=320"
            title="Castles"
          />
          <Category
            imgurl="https://a0.muscache.com/im/pictures/dbf3efc3-9e0f-46a6-a402-010b0b7499dc.jpg?im_w=320"
            title="Barns"
          />
          <Category
            imgurl="https://a0.muscache.com/im/pictures/dce88618-109d-466b-b2b8-4e639c7aff36.jpg?im_w=320"
            title="Tiny Houses"
          />
        </div>
      </div>

      <div className="uniquepage__cards">
        <h3>Nearby stays in nature</h3>
        <div className="uniquepage__row">
          <Card
            imgurl="https://a0.muscache.com/im/pictures/fa59ecb8-74c7-4076-a9a4-dd3f31656e73.jpg?aki_policy=x_large"
            title="Farm Stay · Damkhind"
            desc="3 guests · 1 bedroom · 2 beds · 1 bathroom"
            price="₹1,200 / night"
            star={4.8}
          />
          <Card
            imgurl="https://a0.muscache.com/im/pictures/c03a23b4-47a4-45aa-a5bd-901170271831.jpg?aki_policy=x_large"
            title="Farm Stay · Daman"
            desc="10 guests · 8 bedroom · 10 beds · 5 bathroom"
            price="₹11,200 / night"
            star={5.0}
          />
          <Card
            imgurl="https://a0.muscache.com/im/pictures/87b3756d-ff12-4889-8cd4-72e81e4b2f72.jpg?aki_policy=x_large"
            title="Farm Stay · Arpora"
            desc="5 guests · 3 bedroom · 5 beds · 3 bathroom"
            price="₹5,200 / night"
            star={4.8}
          />
        </div>
      </div>
      <div className="uniquepage__cards">
        <h3>Movable Stays Near You</h3>
        <div className="uniquepage__row">
          <Card
            title="Farm Stay · DamkhindCamping Co - Thar (S) - 4x4"
            desc="5 guests· 2 bedroom · 2 beds · 0 bathroom"
            imgurl="https://a0.muscache.com/im/pictures/9c240f1b-7bb4-4f99-9f08-eb475844b0ca.jpg?aki_policy=x_large"
            price="₹13,200 / night"
            star={4.8}
          />
          <Card
            imgurl="https://a0.muscache.com/im/pictures/8cecd08d-a618-42b6-b8a3-380f6ef6beb8.jpg?aki_policy=x_large"
            title="Aqua Castle Houseboat"
            desc="2 guests · 2 bedroom · 2 beds · 1 bathroom"
            price="₹21,200 / night"
            star={5.0}
          />
          <Card
            imgurl="https://a0.muscache.com/im/pictures/fa3ad6e7-bc09-4d08-95be-19f29a2cc955.jpg?aki_policy=x_large"
            title="Aqua Castle Houseboat"
            desc="6 guests · 3 bedroom · 2 beds · 2 bathroom"
            price="₹11,200 / night"
            star={4.52}
          />
        </div>
      </div>
      <div className="uniquepage__cards">
        <h3>Unique stays around the world</h3>
        <div className="uniquepage__row">
          <Card
            title="올모스트홈 스테이 하동 <연하재>"
            desc="4 guests· 2 bedroom · 2 beds · 2 bathroom"
            imgurl="https://a0.muscache.com/im/pictures/11df6776-d9ef-487d-9de4-66ad98db9cbc.jpg?aki_policy=x_large"
            price="₹14,200 / night"
            star={4.9}
          />
          <Card
            imgurl="https://a0.muscache.com/im/pictures/d5d015a1-1427-4c3c-99c1-20d79b136691.jpg?aki_policy=x_large"
            title="Casa del Árbol Pinochueco (Patagonia)"
            desc="2 guests · 1 bedroom · 1 beds · 1 bathroom"
            price="₹10,200 / night"
            star={3.8}
          />
          <Card
            imgurl="https://a0.muscache.com/im/pictures/2e5550b5-628f-46a6-ae3b-93495384c15e.jpg?aki_policy=x_large"
            title="Unique glamping experience near Cambridge "
            desc="2 guests · 1 bedroom · 1 beds · 1 bathroom"
            price="₹8,599 / night"
            star={4.87}
          />
        </div>
      </div>
    </div>
  );
}

export default UniqueSearchPage;
