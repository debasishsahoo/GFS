import React from "react";

const Section = (props) => {
  return (
    <section>
      <h2>{props.headline}</h2>
      <p>{props.para}</p>
      <ul>
        <li>{props.li1}</li>
        <li>{props.li2}</li>
      </ul>
    </section>
  );
};

export default Section;
