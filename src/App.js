import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import BriefInfo from "./components/BriefInfo";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <BriefInfo />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
