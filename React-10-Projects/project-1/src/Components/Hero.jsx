import React from "react";

function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST </h1>
        <p>
          YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST AND WE’RE HERE
          TO HELP YOU WITH OUR SHOES. Shop Now Category Also Available On
        </p>

        <div className="btn-content">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="Shoping">
          <p>Also Available On</p>
          <div className="brand-logo">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>

      <div className="hero-images">
        <img src="/images/heroname.png" alt="heroname" />
      </div>
    </main>
  );
}

export default Hero;
