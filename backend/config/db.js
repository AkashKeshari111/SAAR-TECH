const {connect}=require("mongoose");
const dotenv=require("dotenv").config();

const connection = connect(process.env.MONGO_URL);

module.exports=connection;