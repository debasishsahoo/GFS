const Router=require('express').Router();
const ProductController=require('../controllers/product.controller')

Router.post('/',ProductController.AddProduct);
Router.get('/',ProductController.ViewProduct);
Router.get('/:id',ProductController.ViewProduct);
Router.put('/update/:id',ProductController.UpdateProduct);
Router.delete('/delete/:id',ProductController.DeleteProduct);

module.exports=Router;