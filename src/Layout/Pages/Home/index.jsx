import React from "react";
import Banner from "./Banner";
import Orders from "./Orders";
import Popular from "./Popular";
import Dishes from "./Dishes";
import Reastaurant from "./Reastaurant";
import Clients from "./Clients";
import Articles from "./Articles";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <Banner />
      <Menu/>
      <Orders/>
      <Popular/>
      <Dishes/>
      <Reastaurant/>
      <Clients/>
      <Articles/>
    </>
  );
};

export default Home;
