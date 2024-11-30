const Product = require("../models/product.model");

const ProductController = {
  AddProduct: async (req, res) => {
    const { name, desc, price } = req.body;
    try {
      const newProduct = new Product({ name, desc, price });
      await newProduct.save();
      res.status(201).json({ message: "Product Inserted..." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  ViewProduct: async (req, res) => {
    try {
        const Products=await Product.find({});
        if(!Products){
            res.status(404).json({ error: 'Product Not Found'});
        }
        res.status(200).json(Products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  },
  ViewProductById: async (req, res) => {
    const {id}=req.params;
    try {
        const oldProduct=await Product.findById({_id:id});
        console.log('oldProduct:', oldProduct)
        if(!oldProduct){
            res.status(404).json({ error: 'Product Not Found'});
        }
        res.status(200).json(oldProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  },
  UpdateProduct: async (req, res) => {
    const {id}=req.params;
    const { name, desc, price } = req.body;
    try {
        const newProduct = await Product.findByIdAndUpdate(
            {_id:id},
            { name, desc, price },
            {new:true}
        )
        if(!newProduct){
            res.status(404).json({ error: 'Product Not Found'});
        }
        res.status(201).json(newProduct);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  },
  DeleteProduct: async (req, res) => {
    const {id}=req.params;
    try {
        const newProduct = await Product.findByIdAndDelete({_id:id})
        if(!newProduct){
            res.status(404).json({ error: 'Product Not Found'});
        }
        res.status(201).json({ error: 'Product Deleted'});
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  },
};

module.exports = ProductController;
