import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { userModel } from "../models/UsersM.js";

const router=express.Router();

router.post("/signup",async(req,res)=>{
    const {name,username,password,confirmPass,college,mobile} = req.body;   // Taking values from frontend
    const user= await userModel.findOne({username});    // Search for if given username field is present in database 
    
    if(user){   // If it returns true than another user with same user exist so we stop here 
        return res.json({message:"This user already exist!!"});
    }

    // If user doesn't exist then code below this will work
    const hashedPassword=await bcrypt.hash(password,10);    // hashing password for safety purposes

    const newUser=new userModel(
        {name,username,password:hashedPassword,college,mobile}
    );    // fitting data in Schema
    await newUser.save();   // Saving data in database

    res.json({message:"User Registered Successfully!!"});
});

router.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    const user= await userModel.findOne({username});    // Search for if given username field is present in database 

    if(!user){  // If user doesn't exist then
        return res.json({message:"User doesn't exist!!"});
    }
    
    // if user exist then
    const isPassValid=await bcrypt.compare(password,user.password);     
    /*
        As we have hashed password earlier we can unhash it so we need to 
        check whether the password provided now is valid or not 
        by again hashing new password and checking it with original hash password..
        As hashing same string will give similar hashed value.
    */

    if(!isPassValid){
        return res.json({message:"Password is Incorrect!! Try Again!!"});
    }

    // If the password is valid then we create a JWT token

    const token=jwt.sign({id:user._id},"secret");
    res.json({token,userId:user._id});
});

export {router as userRouter};

/*
{
  "name":"Shubham",
  "username":"shubz0",
  "password":"hashed",
  "college":"PICT",
  "mobile":9876543210
}
*/