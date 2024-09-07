import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {




    
  }

  render() {
    return (
      <>
        <h2>Card</h2>
        <div className="card">
          <img src="" alt="" className="img" />
          <div className="container">
            <h4>Name</h4>
            <br />
            <p>job</p>
          </div>
        </div>
        <div className="card">
          <button className='button' type="button">Male</button>
          <button className='button' type="button">FeMale</button>
        </div>
      </>
    );
  }
}

export default Card;
