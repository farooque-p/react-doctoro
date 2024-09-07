import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import Title from "../components/Title";

const Home = () => {
  return (
    <>
      <Title title="Home" desc="Home" />
      <div>
        <Header />
        <SpecialityMenu />
        <TopDoctors />
        <Banner />
      </div>
    </>
  );
};

export default Home;
