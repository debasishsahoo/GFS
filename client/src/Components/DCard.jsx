import React from "react";
import './Card.css'
const DCard = (props) => {
  return (
    <>
      <h2>DCard</h2>
      <div className='card'>
        <img className="img" src={props.img} alt=""/>
        <div className="container">
          <h4>{props.name}</h4>
          <p>{props.domain}</p>
        </div>
      </div>
    </>
  );
};

export default DCard;