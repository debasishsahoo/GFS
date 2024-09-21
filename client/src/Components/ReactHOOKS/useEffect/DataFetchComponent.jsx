import React, { useEffect, useState } from 'react'
const DataFetchComponent = (url) => {
const [data,setData]=useState(0);

useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>setData(data))
  .catch(err=>console.error(`Error:${err}`))
},[url]);
  return {data}
}

export default DataFetchComponent