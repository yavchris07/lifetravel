import React from "react";
import "./style.scss";


export function BannerArea({title}) {
  return (
    <section className="banner-are">
      <div className="banner-area-cover">
         <img src="" alt="" />
         <h4>{title}</h4>
      </div>
    </section>
  );
}
