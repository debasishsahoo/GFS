import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../Services/Api";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await api.get(`/product/view/${id}`);
      setName(res.data.name);
      setPrice(res.data.price);
      setDesc(res.data.desc);
    };
    fetchProduct();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    await api.put(`/product/update/${id}`, {
      name: name,
      desc: desc,
      price: price,
    });
    setName("");
    setPrice("");
    setDesc("");
    navigate('/product')
  };

  return (
    <div className="register">
      <form onSubmit={updateProduct}>
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
        <button type="submit">Update Product</button>
        <br/>
        <Link to={`/product`}>Product List</Link>
      </form>
    </div>
  );
};

export default UpdateProduct;
