const router=require('express').Router();
const adminController=require('../controllers/admin.controller')


//insert data we Use POST Method
router.post('/signup',adminController.signUp)
router.post('/signin',adminController.signIn)
router.post('/signout',adminController.signOut)

//get data we Use GET Method
router.get('/all',adminController.getAdmins)
router.get('/:id',adminController.getAdminById)
router.get('/:search',adminController.getAdminByQuery)

//update Data we Use PUT/PATCH Method
router.put('/:id',adminController.updateAdminById)

//delete Data we Use DELETE Method
router.delete('/:id',adminController.deleteAdminById)

module.exports=router;