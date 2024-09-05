import React from "react";

const IterativeProps = ({ students }) => {
  return (
    <div>
      {students.map((student, index) => {
        return (
          <h1 key={index}>
            Value={student} key={index}
          </h1>
        );
      })}
    </div>
  );
};

export default IterativeProps;
