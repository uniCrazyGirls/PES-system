const jwt = require("jsonwebtoken");
const JWT_SECRET = "IMALSHA";

exports.authenticateJWT=(req,res,next)=>{
  const token = req.cookies.token
  try {
    //the import part
    const user = jwt.verify(token,JWT_SECRET)
    req.user=user
    next();
  } catch (error) {
    res.clearCookie("token")
    return res.redirect("/")
  }
}
