import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/3.jpg";
import Footer from "../components/Footer";
import carRental from "../assets/carRental.jpg";
import TripData from "../components/TripData";
import Travel from "../assets/travel1.jpg";
import hotel from "../assets/hotel.jpg";
const Service = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" heroImg={AboutImg} title="Service" />

      <div className="trip">
        <h1>Our Services</h1>
        <p>You can connect with our unique services.</p>
        <div className="tripcard">
          <TripData
            image={carRental}
            heading="Car Rental"
            text="Search, Compare and Save Using the World's Biggest Online Car Rental Service. Book Online Today With the World's Biggest Online Car Rental Service...."
          />
          <TripData
            image={Travel}
            heading="Travel Service"
            text="Your trusted travel agency in India, providing expert travel services. Plan your dream vacation with Odyssey Tours and Travels and explore the world ..."
          />
          <TripData
            image={hotel}
            heading="Hotel Service"
            text=" Additional services provided by a hotel · clothing and footwear repairing, laundry and dry-cleaner; · hairdresser; · bath, sauna, swimming-pool; ..."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
