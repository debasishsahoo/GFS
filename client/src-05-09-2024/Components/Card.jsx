import React from "react";
import './Card.css'
const Card = () => {
  return (
    <>
      <h2>Card</h2>
      <div className='card'>
        <img className="img" src='https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0' alt=""/>
        <div className="container">
          <h4>Debasish Sahoo</h4>
          <p>DevOps/dEV/ML</p>
        </div>
      </div>
    </>
  );
};

export default Card;
