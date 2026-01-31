import { useState } from "react";
import { Element } from "react-scroll";
import Navbar from "./components/NavBar/Navbar";
import Herosection from "./components/HeroSection/Herosection";
import Services from "./components/OurServices/Services";
import About from "./components/AboutUs/About";
import ContactUs from "./components/Contactus/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Homepage() {
  return (
    <div className="bg-gray-50 w-full">
      <Navbar />
      <Element name="herosection">
        <Herosection />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <ContactUs />
      </Element>
      <Footer />
    </div>
  );
}

export default Homepage;
