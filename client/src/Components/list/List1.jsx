import React from "react";

const List1 = () => {
  const numbers = [4, 9, 16, 25, 36, 49];
  //const sqrtNum1=numbers.map(Math.sqrt)
  const sqrtNum2 = numbers.map((element, index) => {
    return <li key={index}>{Math.sqrt(element)}</li>;
  });

  const doTimes = (num, multiple) => {
    return num * multiple;
  };

  const timesList = numbers.map((num, index) => {
    return <li key={index}>{doTimes(num, 5)}</li>;
  });

  const persons = [
    { firstName: "Debasish", lastName: "Sahoo" },
    { firstName: "Arnab", lastName: "Bhowmik" },
    { firstName: "Nilay", lastName: "Ghosh" },
    { firstName: "Parthab", lastName: "Das" },
    { firstName: "Shubha", lastName: "Rath" },
    { firstName: "Sheha", lastName: "Panja" },
    { firstName: "Subham", lastName: "Pattanayak" },
  ];

  const getFullName = (item) => {
    return [item.firstName, item.lastName].join(" ");
  };

  const printFullName = persons.map((person, i) => {
    return <li key={i}>{getFullName(person)}</li>;
  });

  //Math.sqrt(4),Math.sqrt(9),Math.sqrt(16),Math.sqrt(25),

  return (
    <>
      <ul>{sqrtNum2}</ul>
      <br />
      <ol>{timesList}</ol>

      <ul>
        {printFullName}
      </ul>
    </>
  );
};

export default List1;
