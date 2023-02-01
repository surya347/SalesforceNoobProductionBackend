const mongoose = require("mongoose");

const interviewQuestionsSchema = new mongoose.Schema({
   
     
      filterApi:{
        type: String,
        required: true,
      },

      category:{
        type: String,
      },

      question:{
        type: String,
        trim : true,
      },
      answer:{
        type: String,
      },

      imagelink:{
        type: String,
      },
 
});


/**--Creating Collections/Models-- */
const InterviewQuestionsCode = mongoose.model("INTERVIEWQUESTIONANDANSWERS", interviewQuestionsSchema);

module.exports = InterviewQuestionsCode;