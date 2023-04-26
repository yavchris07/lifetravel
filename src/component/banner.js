import React from "react";
import "./style.scss";
import Basic from "./Basic";

export function Banner( ) {
  return (
    <section className="banner">
      <div className="banner-cover">
        {/* <h3>Life Travels</h3> */}
        <div className="banner-title">
          <p>Better than a Dream </p>
          {/* <h4>694 staff accros the world</h4> */}
        </div>
       
        <a href="/about">More</a>
        <Basic />
      </div>
    </section>
  );
}
