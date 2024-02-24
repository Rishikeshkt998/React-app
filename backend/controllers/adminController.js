const asyncHandler = require("express-async-handler");
const Admin = require("../Models/adminSchema");
const User=require('../Models/userSchema')
const genearteToken = require("../utils/generateToken");




const userViewAll = asyncHandler(async (req, res) => {
  const users = await User.find() 

  res.json(users); 
});
const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password} = req.body;
  const adminExists = await Admin.findOne({ email });
  if (adminExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const admin= await Admin.create({
    name,
    email,
    password,
  
  });
  if (admin) {
    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: genearteToken(admin._id),
      
      
    });
  } else {
    res.status(400);
    throw new Error("error occured");
  }

  res.json({
    name,
    email,
    password,
  });
});

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({email});

  if (admin && (await admin.matchPassword(password))) {
    return res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: genearteToken(admin._id),
      
    });
  } else {
    res.status(400);
    throw new Error("invalid email or password");
  }
});


const AddUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: genearteToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("error occured");
  }

  res.json({
    name,
    email,
    password,
    pic,
  });
})
const updateUser = asyncHandler(async (req, res) => {
  const { id,name, email, password, pic } = req.body;
  const user = await User.findById(id);
  if (!user) {
    res.status(404);
    throw new Error("User Not Found");
  }

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    user.pic = pic || user.pic;
    if (password) {
      user.password = password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      isAdmin: updatedUser.isAdmin,
      token: genearteToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
})
const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id; 

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.status(404);
      throw new Error("Admin Not Found");
    }

   await user.deleteOne();
    res.json({ message: "Admin profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
const editUserDetails = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    
    if (!user) {
      res.status(404).json({ error: "User Not Found" });
      return;
    }

    // Extract relevant user details and send them in the response
    const { name, email, pic } = user;
    res.json({ name, email, pic });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = { registerAdmin, authAdmin,AddUser,updateUser,editUserDetails,deleteUser,userViewAll};