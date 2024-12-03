import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../Services/Api";

const ProductDetails = () => {
  const { id } = useParams();
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

  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>Price:${price}</h3>
      <h3>Description</h3>
      <p>{desc}</p>
      <Link to={`/product`}>Product List</Link>
    </div>
  );
};

export default ProductDetails;
