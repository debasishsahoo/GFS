import React from "react";
import ProductHeader from "./ProductHeader";
import ProductDetails from "./ProductDetails";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductFooter from "./ProductFooter";

const RightComponent = (props) => {
  return (
    <div className="right">
      <div className="product-info">
        <ProductHeader />
        <ProductDetails />
        <ProductSize />
        <ProductColor />
        <ProductFooter />
      </div>
    </div>
  );
};

export default RightComponent;
