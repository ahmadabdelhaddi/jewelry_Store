import React from "react";
import Category from "./Category";
import "./Category.css";
function Categories() {
  return (
    <div style={{ background: "white" }}>
      <h1 className="OurCollection">Our collection</h1>
      <div className="CategoryContainer" id="AllCatagery">
        <Category
          image="https://cdn.shopify.com/s/files/1/0908/7252/products/10_1024x1024.jpg?v=1435561709"
          title=" NECKLACE"
        />

        <Category
          image="https://cdn.shopify.com/s/files/1/0099/8912/8258/products/WEB_299239C01_RGB_1000x1000.png?v=1604236952"
          title="EARRINGS"
        />

        <Category
          image="https://cdn.shopify.com/s/files/1/0099/8912/8258/products/WEB_592398C01_RGB_1000x.png?v=1667229992"
          title=" BRACELET"
        />

        <Category
          image="https://cdn.shopify.com/s/files/1/0099/8912/8258/products/WEB_198863C02_RGB_1000x.png?v=1632142149"
          title=" RINGS"
        />
      </div>
    </div>
  );
}

export default Categories;
