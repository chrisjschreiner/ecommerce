import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import FeaturedBrands from "../components/FeaturedBrands";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <FeaturedBrands />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
