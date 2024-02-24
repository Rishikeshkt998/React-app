const express = require('express');
const { protect } = require('../middleware/authmiddleware');
const router = express.Router();
const notesController=require("../controllers/notesController")


router.get('/' ,protect,notesController.getNotes),
router.post('/create' ,protect,notesController.CreateNote),
router.route('/:id')
  .get( notesController.getNoteById)
  .put(protect, notesController.UpdateNote)
  .delete(protect,notesController.DeleteNote)





module.exports=router