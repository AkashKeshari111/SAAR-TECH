const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv").config();
const  connection  = require("./config/db");
const authRouter = require("./Auth/auth.user.router");
const adminAuthRouter = require("./Admin/Admin.auth.router");
const { authentication } = require("./Middleware/authentication");
const authorization = require("./Middleware/authorization");
const AdminProductRouter = require("./Admin/Admin.router");



const app=express();
app.use(cors());
app.use(express.json());

//**Added your Router here */
app.use("/auth",authRouter)
app.use("/auth",adminAuthRouter)
app.use("/admin",AdminProductRouter)

//**Ending of Router */

// checking homepage

app.get("/",authentication,authorization(["Admin"]),(req,res)=>{
    // Ypu can use use status also for sending res
    res.status(200).send("Home Page")
})


// function randomValueHex (len) {
//     return crypto.randomBytes(Math.ceil(len/2))
//         .toString('hex') // convert to hexadecimal format
//         .slice(0,len).toUpperCase();   // return required number of characters
// }

// var string = randomValueHex(4)+"-"+randomValueHex(4)+"-"+randomValueHex(4);
// console.log(string);

//Listening and connecting to port and db respectively

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