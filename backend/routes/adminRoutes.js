const express = require('express');
const router = express.Router();
const adminController=require('../controllers/adminController')
const {protectAdmin}=require('../middleware/authmiddleware')

router.post('/' ,adminController.registerAdmin),
router.get('/view' ,adminController.userViewAll),
router.post('/login' ,adminController.authAdmin),
router.post('/add' ,adminController.AddUser),
router.post('/update' ,adminController.updateUser),
router.delete('/delete/:id' ,adminController.deleteUser),
router.get('/edituser/:id' ,adminController.editUserDetails),









module.exports=router