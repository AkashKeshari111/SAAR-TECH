const { AdminAuthModel } = require("../Admin/Admin.auth.model");
const { AuthModel } = require("../Auth/auth.user.model");


const authorization=(permission_role)=>{
  return async function(req,res,next){
    {
      const {userId}= req.body;
     
      const user = await AdminAuthModel.findOne({_id:userId}) || await AuthModel.findOne({_id:userId});
      // console.log(user)
      const Role = user.role;
      // console.log(Role)
          if(permission_role.includes(Role)){
              next()
          }
          else{
              res.status(403).send("Denied Permission")
          }
      }
  }
}

module.exports=authorization;