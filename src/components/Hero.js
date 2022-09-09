import React from "react";

const Hero = () => {
  return (
    <section className="main">
      <h2 className="search-main">India's Largest Community of Travellers</h2>
      <label for="search"></label>
      <input
        list="predefined-search-main"
        size="50"
        type="search"
        id="search"
        autocomplete="off"
        placeholder="  Search for itineraries, destinations, hotels or activities"
      />
      <datalist id="predefined-search-main">
        <option value="Packages and Stays"></option>
        <option value="Online Experiences By Tripoto"></option>
        <option value="How To earn badges"></option>
        <option value="Goa Packages"></option>
      </datalist>
    </section>
  );
};

export default Hero;
