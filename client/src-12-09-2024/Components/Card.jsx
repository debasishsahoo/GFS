import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    //this is init state.when the page is loading the this will trigger automatically
    this.state = {
      img: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png",
      alt: "User Image",
      name: "Dummy Name",
      job: "Dummy Job",
    };
  }

  Male = () => {
    //this is Male State
    this.setState({
      img: "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
      alt: "Male Image",
      name: "This is Male Name",
      job: "This is Male Job",
    });
  };
  FeMale = () => {
    //this is FeMale State
    this.setState({
      img: "https://www.pngarts.com/files/5/User-Avatar-PNG-Picture.png",
      alt: "User Image",
      name: "This is FeMale Name",
      job: "This is FeMale job",
    });
  };

  render() {
    return (
      <>
        <h2>Card</h2>
        <div className="card">
          <img src={this.state.img} alt={this.state.alt} className="img" />
          <div className="container">
            <h4>{this.state.name}</h4>
            <br />
            <p>{this.state.job}</p>
          </div>
        </div>
        <div className="card">
          <button className="button" type="button" onClick={this.Male}>
            Male
          </button>
          <button className="button" type="button" onClick={this.FeMale}>
            FeMale
          </button>
        </div>
      </>
    );
  }
}

export default Card;
