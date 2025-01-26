import React from "react";
import MainSection from "./MainSection";
import GridSection from "./GridSection";
import ServicesSection from "../components/ServicesSection";

const Home: React.FC = () => {
  return (
    <div>
      <MainSection />
      <GridSection />
      <ServicesSection/>
    </div>
  );
};

export default Home;
