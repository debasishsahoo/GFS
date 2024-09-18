import React, { useState } from "react";

const UseStateHooks3 = () => {
  const [student, setStudent] = useState({
    name: "Debasish Sahoo",
    education: "MTECH",
    age: 36,
    isMale: true,
  });

  const updateStudent = () => {
    setStudent((e) => {
      console.log(e)
      return { ...e, name: "Sayani", isMale: false };
    });
  };



  return (
    <div>
      <h1>UseStateHooks3</h1>
      <p>My name is <b>{student.name}</b> and i am a <b>{student.education} </b>
      student.i am <b>{student.age}</b> years old {(student.isMale)?'👨':'👧'}
      </p>
      <button onClick={updateStudent}>Update</button>
    </div>
  );
};

export default UseStateHooks3;
