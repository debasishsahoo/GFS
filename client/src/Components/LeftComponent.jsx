import React from "react";

const LeftComponent = (props) => {
  return (
    <div className="left">
      <img
        src={props.img_src}
        alt={props.img_alt}
      />
      <i class="fa fa-long-arrow-left"></i>
      <i class="fa fa-long-arrow-right"></i>
    </div>
  );
};

export default LeftComponent;
