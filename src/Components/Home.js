import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/71bNbCPRIYL._SX3000_.jpg"
        alt="amazon backaground Image"
      />
      <div className="home__row">
        <Product
          id="12345"
          title="The Minimalist Entrepreneur: How Great Founders Do More with Less"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41npnt15R+L._SY344_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
