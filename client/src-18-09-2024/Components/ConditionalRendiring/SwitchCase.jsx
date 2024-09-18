import React from "react";

function Message(props) {
  return (
    <div>
      <h1>Hi {props.text}</h1>
    </div>
  );
}

const NotificationMsg = (props) => {
  switch (props.name) {
    case "deb":
      return <Message text={props.name} />;
    case "Nilay":
      return <Message text={props.name} />;
    case "Shubha":
      return <Message text={props.name} />;
    case "Subham":
      return <Message text={props.name} />;
    default:
      return <Message text={'default'} />;
  }
};

export default NotificationMsg;
