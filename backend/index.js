const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv").config();
const  connection  = require("./config/db");
const authRouter = require("./Auth/auth.router");



const app=express();
app.use(cors());
app.use(express.json());

//**Added your Router here */
app.use("/auth",authRouter)



//**Ending of Router */

// checking homepage

app.get("/",(req,res)=>{
    // Ypu can use use status also for sending res
    res.status(201).send("Home Page")
})


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