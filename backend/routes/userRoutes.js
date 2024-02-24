const express = require('express');
const router = express.Router();
const userController=require('../controllers/userControllers')
const {protect}=require("../middleware/authmiddleware")

router.post('/' ,userController.registerUser),
router.post('/login' ,userController.authUser),
router.post('/profile' ,protect,userController.updateUserProfile),





module.exports=router