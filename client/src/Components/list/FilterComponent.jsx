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


const errVal=[
    {id:15},{id:-1},{id:0},{id:3},{id:12.2},
    {},{id:null},{id:NaN},{id:'undefined'},{id:22},
    {id:17},{id:10},
]
let invalidEntries=0;
function filterById(item){
    if(Number.isFinite(item.id)&& item.id !==0 && item.id > 0){
        return true;
    }
    invalidEntries++;
    return false;
}
const arrById=errVal.filter(filterById);
console.log('arrById:', arrById)
console.log('invalidEntries:', invalidEntries)







  return <div>FilterComponent</div>;
};

export default FilterComponent;
