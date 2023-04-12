const jwt =require("jsonwebtoken")
const Authentication=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    if(token){
        const decoded =jwt.verify(token,"fashionflare");
        if(decoded){
            req.body.userid=decoded.userid;
            next()
        }
    }else{
        res.status(400).send({"msg":"login fisrt"})
    }
}


module.exports={Authentication}