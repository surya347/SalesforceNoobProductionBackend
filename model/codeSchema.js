const mongoose = require("mongoose");


const codeSchema = new mongoose.Schema({
    topic: {
        type: String,
        trim :true, 
      },
      topicApi:{
        type: String,
        trim :true,
        required: true,
        unique: true,
      },
      imageLink:{
        type: String,
        trim :true,
      },
      youtube:{
        type: String,
        trim :true,
      },
      category: {
        type: String,
        trim :true,
      },
      isPopular: {
        type: String,
        trim : true,
      },
      docOrCode: {
        type: String,
        trim : true,
      },
      description: {
        type: String,
        trim : true,
      },   
      summary: {
        type: String,
        trim : true,
      },
      code1: {
        type: String, 
        trim : true, 
      },
      message1: {
        type: String,
        // unique : true,
      },
      code2: {
        type: String,
        trim : true, 
      },
      message2: {
        type: String,
        trim : true,
      },
      code3 : {
        type: String,
       
    },
    message3: {
        type: String,
       
    },
    code4 : {
        type: String,
        
    },
    message4 : {
        type: String,
        
    },
    code5: {
      type: String, 
      trim : true, 
    },
    message5: {
      type: String,
      // unique : true,
    },
    code6: {
      type: String,
      trim : true, 
    },
    message6: {
      type: String,
      trim : true,
    },
    code7 : {
      type: String,
     
  },
  message7: {
      type: String,
     
  },
  code8 : {
      type: String,
      
  },
  message8 : {
      type: String,
      
  },
    
    
});


/**--Creating Collections/Models-- */
const SourceCode = mongoose.model.codeSchema ||mongoose.model("CODE", codeSchema);

module.exports = SourceCode;