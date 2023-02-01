const multer = require('multer');

//set storage from multer
var storage = multer.diskStorage({
    destination : function( req,file,callback){
      callback(null, 'upload')
    },
    filename:function(req,file,callback){
      //image.jpg
      var ext = file.originalname.substring(file.originalname.lastIndexOf('.'));
  
      callback(null, file.fieldname+'-'+Date.now()+ ext) 
    }
  })

  //MOW create route in auth.js
  
  module.exports = store = multer({ storage : storage});