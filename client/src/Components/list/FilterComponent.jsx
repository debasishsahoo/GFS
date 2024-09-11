import React from "react";

const FilterComponent = () => {
  const Words = ["spray", "elite", "exuberant", "destruction", "present"];

  const result = Words.filter((word) => word.length > 6);
  console.log(result);

  function isBig(value) {
    return value >= 5;
  }

  const filtered = [12, 3, 8, 4, 130, 2, 44].filter(isBig);
  console.log("filtered:", filtered);

  const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13];

  function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  console.log(arr.filter(isPrime))

  return <div>FilterComponent</div>;
};

export default FilterComponent;
