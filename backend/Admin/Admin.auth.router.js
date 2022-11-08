const { Router } = require("express");

const bcrypt = require("bcrypt");
const dns = require("node:dns");
const jwt = require("jsonwebtoken");
const { AdminAuthModel } = require("./Admin.auth.model");
const dotenv = require("dotenv").config();

const adminAuthRouter = Router();

//Make your API here

adminAuthRouter.post("/admin/register", async (req, res) => {
  const {
    name,
    email,
    password,
    country_code,
    mobile,
    gender,
    userId,
    AdminId
  } = req.body;

  try {
  const auth_user = await AdminAuthModel.findOne({ email,AdminId });
  const Role="Admin";

    if (auth_user) {
      return res.status(403).send({ msg: "User are already exists" });
    } else {
      bcrypt.hash(password, 5, async function (err, hash) {
        if (err) {
          return res.status(501).send(err);
        }
        dns.lookup("gearbest.com", async (err, address, family) => {
          if (err) {
            return res.status(501).send(err);
          }
          const new_adminAuthUser = new AdminAuthModel({
            name,
            email,
            password: hash,
            country_code,
            mobile,
            gender,
            ip_address: address,
            role:Role,
            userId,
            AdminId
          });
          await new_adminAuthUser.save();
          return res.status(201).send({ msg: "Signup Successfully" });
        });
      });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

adminAuthRouter.post("/admin/login", async (req, res) => {
  const { email, password,AdminId } = req.body;
 
  const validUser = await AdminAuthModel.findOne({ email,AdminId });
  if(validUser){
  const userId = validUser._id;
  const hash = validUser.password;
  try {
    await bcrypt.compare(password, hash, async function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }
      if (result) {
        const token = jwt.sign({ userId }, process.env.SECRET_KEY);
        return res.status(201).send({ msg: "Login Success", token: token });
      }
      else{
        return res.status(401).send({ msg: "Login failed!" })
      }
    });
  } catch (err) {
    return res.status(401).send(err);
  }
}
else{
  return res.status(401).send({ msg: "Login failed!" });
}
});

module.exports = adminAuthRouter;
