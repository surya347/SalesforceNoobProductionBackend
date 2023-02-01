const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
   
      heading:{
        type: String,
      },

      category:{
        type: String,
      },

      type:{
        type: String,
      },

      topic1:{
        type: String,
      },

      link1:{
        type: String,
      },

      icon1:{
        type: String,
      },

      topic2:{
        type: String,
      },

      link2:{
        type: String,
      },

      icon2:{
        type: String,
      },

      topic3:{
        type: String,
      },

      link3:{
        type: String,
      },

      icon3:{
        type: String,
      },

      topic4:{
        type: String,
      },

      link4:{
        type: String,
      },

      icon4:{
        type: String,
      },

      topic5:{
        type: String,
      },

      link5:{
        type: String,
      },

      icon5:{
        type: String,
      },

      topic6:{
        type: String,
      },

      link6:{
        type: String,
      },

      icon6:{
        type: String,
      },
 
});


/**--Creating Collections/Models-- */
const RecommendationCode = mongoose.model("RECOMMEDATION", recommendationSchema);

module.exports = RecommendationCode;