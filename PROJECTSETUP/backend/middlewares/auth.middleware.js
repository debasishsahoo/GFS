const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports=(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    if(!authHeader){
        return res.status(401).json({message:'Authorization Header is Messing'})
    }

    const token=authHeader.startsWith('Bearer ')
    ?authHeader.slice(7)
    :authHeader.trim();

    if(!token){
        return res.status(401).json({message:'Access Denied, Token is Messing'})
    }

    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
        return res.status(401).json({message:'Invalid Token'})
    }
}