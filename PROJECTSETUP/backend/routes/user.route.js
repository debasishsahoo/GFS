const Router=require('express').Router();
const UserController=require('../controllers/user.controller')
const authMiddleware=require('../middlewares/auth.middleware')

Router.post('/signup',UserController.SignUp);
Router.post('/signin',UserController.SignIn);
Router.put('/change-password',authMiddleware,UserController.ChangePassword);
Router.get('/user',authMiddleware,UserController.getUser);

module.exports=Router;