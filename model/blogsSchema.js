const mongoose = require("mongoose");


const blogsSchema = new mongoose.Schema({
    header: {
        type: String,
        trim :true, 
      },
      headerApi:{
        type: String,
        trim :true,
        required: true,
        unique: true,
      },
      imageLink:{
        type: String,
        trim :true,
      },
      writtenByName:{
        type: String,
        trim :true,
      },
      writtenByDetails:{
        type: String,
        trim :true,
      },
      writtenByImageLink:{
        type: String,
        trim :true,
      },
      youtubeLink:{
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
      description: {
        type: String,
        trim : true,
      },   
      summary: {
        type: String,
        trim : true,
      },

    //   blogs details section starts here
    step1:{
        type: String, 
        trim : true, 
    },
      stepCode1: {
        type: String, 
        trim : true, 
      },
      stepMessage1: {
        type: String,
        trim : true,
      },
      stepImageLink1: {
        type: String,
        trim : true,
      },

    
    step2:{
        type: String, 
        trim : true, 
    },
      stepCode2: {
        type: String, 
        trim : true, 
      },
      stepMessage2: {
        type: String,
        trim : true,
      },
      stepImageLink2: {
        type: String,
        trim : true,
      },


    step3:{
        type: String, 
        trim : true, 
    },
      stepCode3: {
        type: String, 
        trim : true, 
      },
      stepMessage3: {
        type: String,
        trim : true,
      },
      stepImageLink3: {
        type: String,
        trim : true,
      },


    step4:{
        type: String, 
        trim : true, 
    },
      stepCode4: {
        type: String, 
        trim : true, 
      },
      stepMessage4: {
        type: String,
        trim : true,
      },
      stepImageLink4: {
        type: String,
        trim : true,
      },


    step5:{
        type: String, 
        trim : true, 
    },
      stepCode5: {
        type: String, 
        trim : true, 
      },
      stepMessage5: {
        type: String,
        trim : true,
      },
      stepImageLink5: {
        type: String,
        trim : true,
      },


    step6:{
        type: String, 
        trim : true, 
    },
      stepCode6: {
        type: String, 
        trim : true, 
      },
      stepMessage6: {
        type: String,
        trim : true,
      },
      stepImageLink6: {
        type: String,
        trim : true,
      },


    step7:{
        type: String, 
        trim : true, 
    },
      stepCode7: {
        type: String, 
        trim : true, 
      },
      stepMessage7: {
        type: String,
        trim : true,
      },
      stepImageLink7: {
        type: String,
        trim : true,
      },


    step8:{
        type: String, 
        trim : true, 
    },
      stepCode8: {
        type: String, 
        trim : true, 
      },
      stepMessage8: {
        type: String,
        trim : true,
      },
      stepImageLink8: {
        type: String,
        trim : true,
      },

    
    step9:{
        type: String, 
        trim : true, 
    },
      stepCode9: {
        type: String, 
        trim : true, 
      },
      stepMessage9: {
        type: String,
        trim : true,
      },
      stepImageLink9: {
        type: String,
        trim : true,
      },


    step10:{
        type: String, 
        trim : true, 
    },
      stepCode10: {
        type: String, 
        trim : true, 
      },
      stepMessage10: {
        type: String,
        trim : true,
      },
      stepImageLink10: {
        type: String,
        trim : true,
      },

    
    step11:{
        type: String, 
        trim : true, 
    },
      stepCode11: {
        type: String, 
        trim : true, 
      },
      stepMessage11: {
        type: String,
        trim : true,
      },
      stepImageLink11: {
        type: String,
        trim : true,
      },


    step12:{
        type: String, 
        trim : true, 
    },
      stepCode12: {
        type: String, 
        trim : true, 
      },
      stepMessage12: {
        type: String,
        trim : true,
      },
      stepImageLink12: {
        type: String,
        trim : true,
      },


    step13:{
        type: String, 
        trim : true, 
    },
      stepCode13: {
        type: String, 
        trim : true, 
      },
      stepMessage13: {
        type: String,
        trim : true,
      },
      stepImageLink13: {
        type: String,
        trim : true,
      },


    step14:{
        type: String, 
        trim : true, 
    },
      stepCode14: {
        type: String, 
        trim : true, 
      },
      stepMessage14: {
        type: String,
        trim : true,
      },
      stepImageLink14: {
        type: String,
        trim : true,
      },

    
    step15:{
        type: String, 
        trim : true, 
    },
      stepCode15: {
        type: String, 
        trim : true, 
      },
      stepMessage15: {
        type: String,
        trim : true,
      },
      stepImageLink15: {
        type: String,
        trim : true,
      },



    step16:{
        type: String, 
        trim : true, 
    },
      stepCode16: {
        type: String, 
        trim : true, 
      },
      stepMessage16: {
        type: String,
        trim : true,
      },
      stepImageLink16: {
        type: String,
        trim : true,
      },


    step17:{
        type: String, 
        trim : true, 
    },
      stepCode17: {
        type: String, 
        trim : true, 
      },
      stepMessage17: {
        type: String,
        trim : true,
      },
      stepImageLink17: {
        type: String,
        trim : true,
      },


    step18:{
        type: String, 
        trim : true, 
    },
      stepCode18: {
        type: String, 
        trim : true, 
      },
      stepMessage18: {
        type: String,
        trim : true,
      },
      stepImageLink18: {
        type: String,
        trim : true,
      },

      
    step19:{
        type: String, 
        trim : true, 
    },
      stepCode19: {
        type: String, 
        trim : true, 
      },
      stepMessage19: {
        type: String,
        trim : true,
      },
      stepImageLink19: {
        type: String,
        trim : true,
      },


    step20:{
        type: String, 
        trim : true, 
    },
      stepCode20: {
        type: String, 
        trim : true, 
      },
      stepMessage20: {
        type: String,
        trim : true,
      },
      stepImageLink20: {
        type: String,
        trim : true,
      },












      
    
});


/**--Creating Collections/Models-- */
const BlogsCode = mongoose.model.blogsSchema ||mongoose.model("BLOGS", blogsSchema);

module.exports = BlogsCode;