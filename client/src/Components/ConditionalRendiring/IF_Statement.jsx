/* eslint-disable no-unused-vars */
import React from "react";
import './IF_Statement.css'
function TrueValue() {
  return (
    <div className='d1 show '>
      <h1>This A TRUE Value</h1>
    </div>
  );
}
function FalseValue() {
  return (
    <div className='d1 hide'>
      <h1>This A FALSE Value</h1>
    </div>
  );
}

const IF_Statement = (props) => {
  const statement = props.data;
  if (statement) {
    return <TrueValue />;
  }
  return <FalseValue />;
};

export default IF_Statement;
