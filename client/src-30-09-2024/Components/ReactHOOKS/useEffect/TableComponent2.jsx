import React, { useEffect, useRef, useState } from "react";
import "./Table.css";
import { getItemList, setItem } from "../../../Services/list";

const TableComponent2 = () => {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState("");
  
  const [list, setList] = useState([]);
  let mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (list.length && !alert) {
      return;
    }
    // getItemList().then((items) => {
    //   if (mounted.current) {
    //     setList(items);
    //   }
    // });
    return () => (mounted.current = false);
  }, [alert, list]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }, [alert]);

  const HandelSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput).then(() => {
      if (mounted.current) {
        setItemInput("");
        setAlert(true);
      }
    });
  };

  return (
    <div className="wrapper">
      <h1>My Tech List</h1>
      <ul>
        {list.map((element) => (
          <li key={element.id}>{element.item}</li>
        ))}
      </ul>
      {alert && <h2>Submit Successfully</h2>}
      <br />
      <form onSubmit={HandelSubmit}>
        <label>
          <p>Add new Item</p>
          <input
            type="text"
            onChange={(e) => setItemInput(e.target.value)}
            value={itemInput}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TableComponent2;
