import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import api from "../../Services/Api";
const Product = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();
    const res = await api.post("/product/add", {
      name: name,
      desc: desc,
      price: price,
    });
    setAllProduct([...allProduct, res.data]);
    setName("");
    setPrice("");
    setDesc("");
  };

  const fetchProduct = async (e) => {
    const res = await api.get("/product/view");
    setAllProduct(res.data);
  };

  const deleteProduct=async(id)=>{
    await api.delete(`/product/delete/${id}`)
    setAllProduct(allProduct.filter((product)=>product._id!==id))
  }

  //console.log(allProduct);
  return (
    <>
      <div className="register">
        <h2> Welcome ,{user && user.username}</h2>
        <form onSubmit={addProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Product Details"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {allProduct.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>$ {product.price}</td>
              <td>{product.desc}</td>
              <Link to={`/product/update/${product._id}`}>Edit</Link>  ||
              <button onClick={()=>deleteProduct(product._id)} className="danger">Delete</button>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  );
};

export default Product;
