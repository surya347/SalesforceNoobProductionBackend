const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express'); 
const app = express();
var fs = require('fs');

const router = express.Router();
var cookieParser = require('cookie-parser');
const path = require('path');
const hbs = require('express-handlebars'); 
const multer = require('multer'); 
const fileupload = require("express-fileupload");
const cors = require("cors");

dotenv.config({ path : './config.env' });
require('./model/conn');

//Middleware
const recommendCodeAuthenticate = require("./middleware/recommendAuthenticate");
const authenticate = require('./middleware/authenticate');
const sourceCodeAuthenticate = require("./middleware/sourceCodeAuthenticate");
const codeDetailAuthenticate = require("./middleware/codeDetailsAuthenticate");
const adminAuthenticate = require("./middleware/adminAuthenticate");
const interviewQuestionsAuthenticate = require('./middleware/interviewQuestionsAuthenticate');
const interviewQuestionsAuthenticateFilter  = require('./middleware/interviewQuestionsAuthenticateFilter')
const blogsAuthenticate = require('./middleware/blogsAuthenticate')
const blogsAuthenticateFilter = require('./middleware/blogsAuthenticateFilter')

app.use(express.json());
 


//Getting PORT number 
const PORT = process.env.PORT;


//serving static files
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(express.static(path.join(__dirname,'public')));


//calling routing functionality
app.use(require('./routes/index'));
app.use(cookieParser()); 

app.get('/', (req,res)=>{
    res.render('main');
  }); 

  app.get('/codess_all_10',sourceCodeAuthenticate, (req, res) => {
    return res.json(req.codeUser);
  })
  
  app.get('/codedetailss',codeDetailAuthenticate, (req,res)=>{
  
    //geting recordID from react in param for query 
    let param = req.query.userId;
    return res.send(req.codeUser);  
    
  }); 
  
  //Recommends routing with middleware
  app.get('/recommends',recommendCodeAuthenticate, (req,res)=>{
    return res.send(req.recommendData); 
  });
  
  app.get('/allblogs_10',blogsAuthenticate, (req,res)=>{
    return res.send(req.allBlogsData); 
  });
  
  app.get('/blogsdetails_10',blogsAuthenticateFilter, (req,res)=>{
    return res.send(req.allBlogsDataFilter); 
  });
  
  //Recommends routing with middleware
  app.get('/interviewquestionss_10',interviewQuestionsAuthenticate, (req,res)=>{
    return res.send(req.interviewQuestionData); 
  });
  
  app.get('/interviewquestionss_Filter',interviewQuestionsAuthenticateFilter, (req,res)=>{
    return res.send(req.interviewQuestionDataFilter); 
  });
  
  app.get('/profiles',authenticate, (req,res)=>{
   return res.json(req.rootUsers); 
  });
  
  app.get('/allusers',adminAuthenticate, (req,res)=>{
   return res.send(req.allUsers);  
  });
  
   //admin profile routing with middleware authentication
   app.get('/admin_for_surya_10',adminAuthenticate, (req,res)=>{
    res.send([req.adminUsers,req.rootUsersNumbers,req.rootCodeNumbers,req.rootRecommendationNumbers,req.rootQuestionNumbers]);
    }); 

 

app.listen(PORT, ()=> {
     console.log(`run ${PORT}`);
})