const express=require("express");
const cors=require("cors");
require("dotenv").config();
const  connection  = require("./config/db");
const authRouter = require("./Auth/auth.user.router");
const adminAuthRouter = require("./Admin/Admin.auth.router");
const AdminProductRouter = require("./Admin/Admin.router");
const passport=require("./Auth/user.google.auth");
const addressRouter = require("./Address/address.router");
const userOrder = require("./UserOrder/User.router");



const app=express();
app.use(cors());
app.use(express.json());

//**Added your Router here */
app.use("/auth",authRouter)
app.use("/auth",adminAuthRouter)
app.use("/admin",AdminProductRouter)
app.use("/address",addressRouter)
app.use("/order",userOrder)

//**Ending of Router */

// checking homepage

app.get("/",(req,res)=>{
    // Ypu can use use status also for sending res
    res.status(200).send("SAARTECH Home Page")
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    // console.log(req.user)
    // const name=req.user.name;
    // const email=req.user.email;
    // const profile=req.user.url;
    // const token=req.user.url; 
    // res.send({name,email,profile,token})
    res.redirect('/');
  });



const PORT=process.env.PORT || 8000;
app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("Connected to db=>"+process.env.MONGO_URL)
    }
    catch(err){
        console.log(err)
    }

    console.log("Listening to PORT => http://localhost:"+PORT)
})