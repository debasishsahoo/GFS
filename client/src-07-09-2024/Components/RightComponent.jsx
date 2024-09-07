import React from "react";
import ProductHeader from "./ProductHeader";
import ProductDetails from "./ProductDetails";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductFooter from "./ProductFooter";

const RightComponent = (props) => {
  console.log(props)
  return (
    <div className="right">
      <div className="product-info">
        <ProductHeader
        name={props.name}
        />
        <ProductDetails
        headline1={props.headline1}
        headline2={props.headline2}
        price1={props.price1}
        price2={props.price2}
        />
        <ProductSize
        sizes={props.sizes}
        />
        <ProductColor
        colors={props.colors}
        />
        <ProductFooter
        button1={props.button1}
        button2={props.button2}
        />
      </div>
    </div>
  );
};

export default RightComponent;
