import React from "react";

const MultipleProps = ({name,surname,dept}) => {
  return (
    <div>
      <h1>
        Hello {name},{surname},{dept}
      </h1>
    </div>
  );
};

export default MultipleProps;
