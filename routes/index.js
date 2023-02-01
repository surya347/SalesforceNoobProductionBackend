const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var cookieParser = require('cookie-parser');
const fs = require('fs');
require('../model/conn');
const store = require('../multer/multer');
 
const Users = require('../model/userSchema');
const SourceCode = require('../model/codeSchema');
const RecommendationCode = require('../model/recommendationSchema');
const InterviewQuestionsCode = require('../model/interviewQuestionsSchema');
const adminAuthenticateForDataPost = require('../middleware/adminAuthenticateForDataPost');
const BlogsCode = require('../model/blogsSchema');



//store.array('name of input filed' , no. of images allowed) is used for multiple imag..you can use single for single image
router.post('/uploadmultiples', store.array('images',2), async (req,res,next)=>{


  const files = req.files;  //file are getting in body
  console.log("files:>>"+JSON.stringify(files));
  const userId = req.body.id;
 
  console.log("userId:>"+JSON.stringify(userId));
 
  if(!files){
    const error = new Error('please choose file');
    error.httpStatusCode = 400;
    return next(error);
  }
 
  //convert images to base64 encoding
  let imgArray = files.map((file)=>{
    let img = fs.readFileSync(file.path);
 
    return encode_img =  img.toString('base64');
  })
 
  let result = imgArray.map((src,index)=>{
    //create object to store image data in DB
    let finalImage = {
      filename:files[index].filename,
      contentType:files[index].mimetype,
      imageBase64: src
    }
 
    console.log("finalImageL:"+finalImage.filename);
 
    let newUpload =  Users.updateMany({_id:userId},{
 
      $set : {
       filename : finalImage.filename,
       contentType : finalImage.contentType,
       imageBase64 : finalImage.imageBase64
      },
    });
 
    return newUpload.updateMany()
    .then(()=>{
 
      return{ msg:` ${files[index].originalname} Uploaded successfully`}
    })
    .catch((err)=>{
      if(err){
        if(err.name === 'MongoError' && err.code === 11000){
          return Promise.reject({error: `Duplicate ${files[index].originalname} `})
        }
        return Promise.reject({error: `Cannot upload ${files[index].originalname}`})
      }
    })
  })
 
 Promise.all(result)
 .then(msg=>{
   res.json({message: "image upload succes"})
   //res.redirect('/uploadmultiple');
 })
 .catch(error=>{
   res.json(error);
 })
  
 }); 
 


  

 //registeration page functionality
router.post("/registers", async (req, res) => { 
  console.log(req.body);
  console.log(req.body.name);

  const { name, email, phone, password, cpassword ,filename,contentType,imageBase64} = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(500).json({ error: "plz fill the all field" });
  }
 
  try {
    /**--matching the email from db with email of User form filed by user-- */
    const userExists = await Users.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "password does not match" });
    } else {
      const user = new Users({
        name,
        email,
        phone,
        password, 
        cpassword,
        filename,
        contentType,
        imageBase64,
      });

      /**--saving data of user in DB via User form--- */
      const userRegister = await user.save();

      if (userRegister) {
        res.status(201).json({ message: "user successfully registered" });
      } else {
        res.status(500).json({ error: "Failed to registered" });
      }
    }
  } catch (error) {
    console.log("err:" + error);
  }
});



  //login routing
  router.post("/logins", async (req, res) => {

    try {
      const { email, password } = req.body;
   
      /*---Null check for login form--*/
      if (!email || !password) {
        return res.status(400).json({ error: "Invalid login data" }); 
      }
  
      /**--Matching email from registration DB with the email from login form filled by user-- */
      const userLogin = await Users.findOne({ email: email });
  
      if (userLogin) {
        //companing user login form password with DB password for signin
        const isMatch = await bcrypt.compare(password, userLogin.password);
  
        //for jwt token genration
        const token = await userLogin.generateAuthToken();
        // console.log("token:" + JSON.stringify(token));
  
        //for cookies
        res.cookie("jwts", token, {
          expires: new Date(Date.now() + 7200000), //cookie will expired after 30 days of login  
          
        });
   
  
        /**--If everything is matching the making user logged in-- */
        if (!isMatch) {
          res.status(500).json({ error: "user sign in failed" });
          console.log("error login:");
        } else {
           res.json({ email: email });
          // console.log("r:");
        }
      } else {
        res.status(500).json({ error: "login failed ,invalid credential" });
        console.log("err:");
      }
  
      // console.log(userLogin);
    } catch (error) {
      console.log("errors : " + error);
    }
  });

  
  // ########Source CODE Routing
  router.post("/addcode_for_noobade",adminAuthenticateForDataPost, async (req,res)=>{
    // console.log('called code:'+JSON.stringify(req.body));
  
     const {  topic,topicApi,imageLink,youtube,category,isPopular,docOrCode,description,summary, code1, message1, code2, message2, code3,message3,  code4,message4, code5,message5,code6,
      message6,
      code7,
      message7,
      code8 ,
      message8,} = req.body;
  
     const code = new SourceCode({
      topic,
      topicApi,
      imageLink,
      youtube,
      category,
      isPopular,
      docOrCode,
      description,
      summary,
      code1,
      message1,
      code2,
      message2,
      code3,
      message3,
      code4,
      message4,
      code5,
      message5,
      code6,
      message6,
      code7,
      message7,
      code8 ,
      message8,
    });
  
     /**--saving data of user in DB via User form--- */
     const addSourceCode = await code.save();
     if (addSourceCode) {
      res.status(201).json({ message: "file successfull" });
    } else {
      res.status(500).json({ error: "Failed to upload" });
    }
   
    }) 
  
    // ######## blogs CODE Routing
  router.post("/addblogs_for_noobade",adminAuthenticateForDataPost, async (req,res)=>{
   
     const { header,headerApi,imageLink,writtenByName,writtenByDetails,writtenByImageLink,youtubeLink,category,isPopular,description,summary,
      step1,stepCode1,stepMessage1,stepImageLink1,
      step2,stepCode2,stepMessage2,stepImageLink2,
      step3,stepCode3,stepMessage3,stepImageLink3,
      step4,stepCode4,stepMessage4,stepImageLink4,
      step5,stepCode5,stepMessage5,stepImageLink5,
      step6,stepCode6,stepMessage6,stepImageLink6,
      step7,stepCode7,stepMessage7,stepImageLink7,
      step8,stepCode8,stepMessage8,stepImageLink8,
      step9,stepCode9,stepMessage9,stepImageLink9,
      step10,stepCode10,stepMessage10,stepImageLink10,
      step11,stepCode11,stepMessage11,stepImageLink11,
      step12,stepCode12,stepMessage12,stepImageLink12,
      step13,stepCode13,stepMessage13,stepImageLink13,
      step14,stepCode14,stepMessage14,stepImageLink14,
      step15,stepCode15,stepMessage15,stepImageLink15,
      step16,stepCode16,stepMessage16,stepImageLink16,
      step17,stepCode17,stepMessage17,stepImageLink17,
      step18,stepCode18,stepMessage18,stepImageLink18,
      step19,stepCode19,stepMessage19,stepImageLink19,
      step20,stepCode20,stepMessage20,stepImageLink20,
    
    } = req.body;
  
     const code = new BlogsCode({
      header,headerApi,imageLink,writtenByName,writtenByDetails,writtenByImageLink,youtubeLink,category,isPopular,description,summary,
      step1,stepCode1,stepMessage1,stepImageLink1,
      step2,stepCode2,stepMessage2,stepImageLink2,
      step3,stepCode3,stepMessage3,stepImageLink3,
      step4,stepCode4,stepMessage4,stepImageLink4,
      step5,stepCode5,stepMessage5,stepImageLink5,
      step6,stepCode6,stepMessage6,stepImageLink6,
      step7,stepCode7,stepMessage7,stepImageLink7,
      step8,stepCode8,stepMessage8,stepImageLink8,
      step9,stepCode9,stepMessage9,stepImageLink9,
      step10,stepCode10,stepMessage10,stepImageLink10,
      step11,stepCode11,stepMessage11,stepImageLink11,
      step12,stepCode12,stepMessage12,stepImageLink12,
      step13,stepCode13,stepMessage13,stepImageLink13,
      step14,stepCode14,stepMessage14,stepImageLink14,
      step15,stepCode15,stepMessage15,stepImageLink15,
      step16,stepCode16,stepMessage16,stepImageLink16,
      step17,stepCode17,stepMessage17,stepImageLink17,
      step18,stepCode18,stepMessage18,stepImageLink18,
      step19,stepCode19,stepMessage19,stepImageLink19,
      step20,stepCode20,stepMessage20,stepImageLink20,
    });
  
     /**--saving data of user in DB via User form--- */
     const addBlogsCode = await code.save();
     if (addBlogsCode) {
      res.status(201).json({ message: "blogs added successfull" });
    } else {
      res.status(500).json({ error: "Failed to upload blogs" });
    }
   
    }) 
  

    //---Interview Questions list routing
    router.post("/addquestions_for_noobade",adminAuthenticateForDataPost, async (req,res)=>{
      // console.log('called code:'+JSON.stringify(req.body));
    
       const {  
       filterApi,
       category,
       question,
       answer,
       imagelink,
      } = req.body;
      console.log("success")
       const questions = new InterviewQuestionsCode({
       filterApi,
       category, 
       question,
       answer,
       imagelink,
      });
    
       /**--saving data of user in DB via User form--- */
       const addQuestions = await questions.save();
       if (addQuestions) {
        res.status(201).json({ message: "interview question added successfull" });
        console.log("success")
      } else {
        res.status(500).json({ error: "Failed to upload interview question" });
        console.log("error")
      }
     
      }) 
    

    //---Recommendation list routing
    router.post("/addrecommend_for_noobade",adminAuthenticateForDataPost, async (req,res)=>{
      // console.log('called code:'+JSON.stringify(req.body));
    
       const {  
       heading,
       category,
       type,
       topic1,
       link1,
       icon1,
       topic2,
       link2,
       icon2,
       topic3,
       link3,
       icon3,
       topic4,
       link4,
       icon4,
       topic5,
       link5,
       icon5,
       topic6,
       link6,
       icon6,} = req.body;
    
       const code = new RecommendationCode({
        heading,
       category,
       type,
       topic1,
       link1,
       icon1,
       topic2,
       link2,
       icon2,
       topic3,
       link3,
       icon3,
       topic4,
       link4,
       icon4,
       topic5,
       link5,
       icon5,
       topic6,
       link6,
       icon6,
      });
    
       /**--saving data of user in DB via User form--- */
       const addRecommendCode = await code.save();
       if (addRecommendCode) {
        res.status(201).json({ message: "recommend file successfull" });
      } else {
        res.status(500).json({ error: "Failed to upload recommendations" });
      }
     
      }) 
    
  

  /**---Logout US page------- */
router.get("/logouts" , (req, res) => {
  console.log('hello logout SERVER ');
  res.clearCookie('jwts',{path:'/'});
  res.status(200).send("user logged out ");
});




  module.exports = router;