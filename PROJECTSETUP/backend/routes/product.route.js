const Router=require('express').Router();
const ProductController=require('../controllers/product.controller')

Router.post('/add',ProductController.AddProduct);
Router.get('/view',ProductController.ViewProduct);
Router.get('/view/:id',ProductController.ViewProductById);
Router.put('/update/:id',ProductController.UpdateProduct);
Router.delete('/delete/:id',ProductController.DeleteProduct);

module.exports=Router;