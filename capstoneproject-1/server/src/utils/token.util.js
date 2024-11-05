const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

async function generateToken(payload) {
  return await jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

async function verifyToken(payload){
    return await jwt.verify(payload,JWT_SECRET,function(err,decoded){
        if(err){
           return resizeBy.status(500).send({
            message:'failure',
            error:err
           });
        }

        return decoded?._id
    })
}

module.exports={generateToken,verifyToken}