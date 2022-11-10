const { Router } = require("express");
const { AuthModel } = require("./auth.user.model");
const bcrypt = require("bcrypt");
const dns = require("dns");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const authRouter = Router();

//Make your API here

authRouter.post("/register", async (req, res) => {
  const {
    name,
    email,
    password,
    country_code,
    mobile,
    gender,
    userId,
  } = req.body;

  try {
  const auth_user = await AuthModel.findOne({ email });
  const Role="Customer";

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
          const new_authUser = new AuthModel({
            name,
            email,
            password: hash,
            country_code,
            mobile,
            gender,
            ip_address: address,
            role:Role,
            userId,
          });
          await new_authUser.save();
          return res.status(201).send({ msg: "Signup Successfully" });
        });
      });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const validUser = await AuthModel.findOne({ email });
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
    return res.status(401).send({ msg: "Login failed!" });
  }
}
else{
  return res.status(401).send({ msg: "Login failed!" })
}
});

module.exports = authRouter;
