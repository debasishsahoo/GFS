import React from "react";
import "./ShowHide.css";

class ShowHide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <>
        {this.state.show ? <div className="msg">Message Box</div> : null}

        <div>
          <button
            className="button show"
            onClick={() => {
              this.setState({ show: true });
            }}
          >
            Show
          </button>
          <button
            className="button hide"
            onClick={() => {
              this.setState({ show: false });
            }}
          >
            Hide
          </button>
          <button
            className="button toggle"
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            Toggle
          </button>
        </div>
      </>
    );
  }
}

export default ShowHide;
