const jwt = require("jsonwebtoken");
const Users = require('../model/userSchema');  
const SourceCode = require('../model/codeSchema');
const InterviewQuestionsCode = require('../model/interviewQuestionsSchema');
const RecommendationCode = require('../model/recommendationSchema');



const authenticate = async (req, res, next) => {
  try {
    //getting jwt token

    const jwtToken = req.cookies.jwts; 
    //console.log(`jwtToken:${jwtToken}`);

    //verifying jwt for Users authentication
    const verifyToken = jwt.verify(jwtToken, process.env.SECRET_KEY);
    //console.log(`verifyToken :${verifyToken}`);
  
    //fetching data of verified Users into "rootUsers"
    const adminUsers = await Users.findOne({
      _id: verifyToken._id, 
      "tokens.token": jwtToken,
      "email":"noobsalesforce@gmail.com",
    });
   // console.log("rootUsers:" + rootUsers);

   const rootUsersNumbers = await Users.find().countDocuments();
   const rootCodeNumbers = await SourceCode.find().countDocuments();
   const rootRecommendationNumbers = await RecommendationCode.find().countDocuments();
   const rootQuestionNumbers = await InterviewQuestionsCode.find().countDocuments();


    if (!adminUsers) { 
      console.log("Users not found");
    }

    const allUsers = await Users.find();
    if(allUsers){
      console.log("All users details found");
    }


    req.token = jwtToken;
    req.adminUsers = adminUsers;
    console.log("adminUsers:"+adminUsers.email);
    req.rootUsersNumbers = rootUsersNumbers;
    req.rootCodeNumbers = rootCodeNumbers;
    req.rootRecommendationNumbers = rootRecommendationNumbers;
    req.rootQuestionNumbers = rootQuestionNumbers;
    req.allUsers = allUsers;


    next();
  } catch (error) {
    res.status(401).send("Unauthorizes:no token provide");
  }
};





module.exports = authenticate;