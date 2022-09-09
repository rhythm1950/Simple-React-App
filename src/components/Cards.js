import React from "react";

const Cards = () => {
  return (
    <section id="packages">
      <h2>Book Budget Tour Packages Curated With You</h2>
      <div class="product-cards">
        {/* <!-- Card-1 --> */}
        <div class="card1 card">
          <img src="./Assets/product-cards/card1.jpg" />
          <h3>PACKAGE</h3>
          <br />
          <h4>North East India Tour</h4>
          <br />
          <div class="card-flex1">
            <h5>North East India</h5>
            <h5>6D-5N</h5>
          </div>
          <br />
          <div class="card-flex2">
            <h6>Rs 29,000 Onwards</h6>
            <button>Quote</button>
          </div>
        </div>
        {/* <!-- Card-2 --> */}
        <div class="card2 card">
          <img src="./Assets/product-cards/card2.jpeg" />
          <h3>PACKAGE</h3>
          <br />
          <h4>Kashmir Packages</h4>
          <br />
          <div class="card-flex1">
            <h5>Kashmir</h5>
            <h5>4D-3N</h5>
          </div>
          <br />
          <div class="card-flex2">
            <h6>Rs 16,000 Onwards</h6>
            <button>Quote</button>
          </div>
        </div>
        {/* <!-- Card-3 --> */}
        <div class="card3 card">
          <img src="./Assets/product-cards/card3.jpeg" />
          <h3>PACKAGE</h3>
          <br />
          <h4>Dubai Packages</h4>
          <br />
          <div class="card-flex1">
            <h5>Dubai</h5>
            <h5>5D-4N</h5>
          </div>
          <br />
          <div class="card-flex2">
            <h6>Rs 28,000 Onwards</h6>
            <button>Quote</button>
          </div>
        </div>
        {/* <!-- Card-4 --> */}
        <div class="card4 card">
          <img src="./Assets/product-cards/card4.jpeg" />
          <h3>PACKAGE</h3>
          <br />
          <h4>Andaman Packages</h4>
          <br />
          <div class="card-flex1">
            <h5>Andaman</h5>
            <h5>5D-4N</h5>
          </div>
          <br />
          <div class="card-flex2">
            <h6>Rs 18,000 Onwards</h6>
            <button>Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
