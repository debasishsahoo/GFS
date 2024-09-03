import React from "react";

const Section = (props) => {
  return (
    <section>
      <h2>{props.headline}</h2>

      {props.para ? <p>{props.para}</p> : ""}

      {props.data ? (
        <ul>
          <li>{props.data.li1}</li>
          <li>{props.data.li2}</li>
        </ul>
      ) : (
        ""
      )}
    </section>
  );
};

export default Section;
