import React from 'react'

const ForEachComponent = () => {

const arr=['a','b','c']
//arr.forEach((element)=>console.log(element))

const ratings=[5,6,7]
let sum=0;

const sumFunction=(a,b)=>a+b;

ratings.forEach((rating)=>{
  sum=sumFunction(sum,rating);
})
//console.log('sum:', sum)

const copyItems=[];


// for(let i=0;i<arr.length;i++){
//   copyItems.push(arr[i]);
// }
// console.log('copyItems:', copyItems)


arr.forEach((item)=>copyItems.push(item));
console.log('copyItems:', copyItems)


const logArrayElements=(ele,index)=>{
  console.log(`a[${index}]=${ele}`)
}

[2,4,6,8,10,12].forEach(logArrayElements)

class Counter{
  constructor(){
    this.sum=0;
    this.count=0;
  }
  add(array){
    array.forEach(function countEntry(entry){
      //this.sum=this.sum+entry
      this.sum +=entry
      ++this.count;
    },this);
  }
}

const obj=new Counter();

obj.add([1,2,3,4,]);
console.log('count:', obj.count)
console.log('sum:', obj.sum)















  return (
    <div>ForEachComponent</div>
  )
}

export default ForEachComponent