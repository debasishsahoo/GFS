import React from "react";
import "./Table.css";
import DataFetchComponent from "./DataFetchComponent";
const TableComponent = () => {
  const { data } = DataFetchComponent("http://localhost:3333/list");
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ITEM</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((element) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.item}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
