const { Router } = require("express");

const bcrypt = require("bcrypt");
const dns = require("node:dns");
const jwt = require("jsonwebtoken");
const { AdminAuthModel } = require("./Admin.auth.model");
const dotenv = require("dotenv").config();
var crypto = require("crypto");
const { authentication } = require("../Middleware/authentication");

const adminAuthRouter = Router();

//Make your API here
function randomValueHex(len) {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString("hex") // convert to hexadecimal format
    .slice(0, len)
    .toUpperCase(); // return required number of characters
}

adminAuthRouter.post("/admin/register", async (req, res) => {
  const {
    name,
    email,
    password,
    country_code,
    mobile,
    gender,
    userId,
    AdminId,
    gst_number,
    company_name,
  } = req.body;

  var string =
    randomValueHex(4) + "-" + randomValueHex(4) + "-" + randomValueHex(4);

  const auth_user = await AdminAuthModel.findOne({ email });
  const Role = "Admin";
  if (auth_user) {
    return res.status(403).send({ msg: "User are already exists" });
  } else {
    try {
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
            role: Role,
            userId,
            AdminId: string,
            gst_number,
            company_name,
          });

          await new_adminAuthUser.save();
          return res
            .status(201)
            .send({ msg: "Signup Successfully", "AdminId": string });
        });
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  }
});

adminAuthRouter.post("/admin/login", async (req, res) => {
  const { email, password, AdminId } = req.body;

  const validUser = await AdminAuthModel.findOne({ AdminId });
 
  if (validUser) {
    const userId = validUser._id;
    const hash = validUser.password;
    const name=validUser.name;
    const role=validUser.role;
    try {
      await bcrypt.compare(password, hash, async function (err, result) {
        if (err) {
          return res.status(500).send(err);
        }
        if (result) {
          const token = jwt.sign({ userId }, process.env.SECRET_KEY,{ expiresIn: '24h' });
          return res.status(201).send({ "msg": "Login Success", token: token,name:name ,role:role,userId});
        } else {
          return res.status(401).send({ "msg": "Login failed!" });
        }
      });
    } catch (err) {
      return res.status(401).send(err);
    }
  } else {
    return res.status(401).send({ "msg": "Login failed!" });
  }
});

adminAuthRouter.patch("/admin/:id",authentication, async (req, res) => {
  const { id } = req.params;
  const { AdminId,password,name,mobile,gender } = req.body;
  const auth_user = await AdminAuthModel.findOne({ AdminId });

  if (auth_user) {
    res.status(403).send({ msg: "This Id already exists" });
  } else {
    try {
      bcrypt.hash(password, 5, async function (err, hash) {
        if(err){
          res.status(500).send(err)
        }
      const updateAdminId = await AdminAuthModel.updateOne(
        { _id: id },
        { $set: { AdminId,password:hash,name,mobile,gender } }
      );
      res.send({ msg: "Update AdminId", updateAdminId });
      })
    } catch (err) {
      res.send(err);
    }
  }
});

module.exports = adminAuthRouter;
