import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" heroImg={AboutImg} title="Contact" />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
