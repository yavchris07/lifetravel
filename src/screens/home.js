import React from "react";
import "./global.scss";
import { Banner } from "../component/banner";
import { AllTitle } from "../component/alltitle";
import { Container } from "../component/container";
//import { BannerArea } from '../component/banner_area'

export function Home(props) {
  return (
    <div className="home">
      <Banner />
      <AllTitle title={"Our Services"} />
      <Container />
      {/* <AllTitle title={"Our Goal"} /> */}
      {/* <BannerArea /> */}
    </div>
  );
}
