"use client";
import { HomeController } from "@/src/modules/Home/controller/HomeController";
import HomeView from "@/src/modules/Home/views/HomeView";
import { NextPage } from "next";

const HomePage: NextPage = (props) => {
  return (
    <HomeController {...props}>
      <HomeView {...props} />
    </HomeController>
  );
};

export default HomePage;
