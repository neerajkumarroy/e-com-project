const UserModel = require("../Models/User");


// This is the Signup API
const UserSignup = async(req,res)=>{
const payload = req.body;
const data = new UserModel(payload);
const result = await data.save();
res.send(result);
};

// This is User Login Api

const UserLogin = async(req,res)=>{
    // console.log(req.body);
    if(req.body.email && req.body.password)
    {
        const data = await UserModel.findOne(req.body).select("-password");
        if(data)
        {
            res.send(data);
        }else{
            res.send({result:"User Not Found"})
        }
    }else{
        res.send({result:"User Not Found"})
    }
   
}

module.exports={UserSignup,UserLogin};