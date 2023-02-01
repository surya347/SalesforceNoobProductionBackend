const jwt = require("jsonwebtoken");
const Users = require('../model/userSchema');  


const authenticate = async (req, res, next) => {
  try {
    //getting jwt token

    const jwtToken = req.cookies.jwts; 
    //console.log(`jwtToken:${jwtToken}`);

    //verifying jwt for Users authentication
    const verifyToken = jwt.verify(jwtToken, process.env.SECRET_KEY);
    //console.log(`verifyToken :${verifyToken}`);


    //fetching data of verified Users into "rootUsers"
    const rootUsers = await Users.findOne({
      _id: verifyToken._id, 
      "tokens.token": jwtToken,
    });
   // console.log("rootUsers:" + rootUsers);


    if (!rootUsers) {
      console.log("Users not found");
    }

    req.token = jwtToken;
    req.rootUsers = rootUsers;
    next();
  } catch (error) {
    res.status(401).send("Unauthorizes:no token provide");
  }
};





module.exports = authenticate;