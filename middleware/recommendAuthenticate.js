const RecommendationCode = require('../model/recommendationSchema');

const recommendCodeAuthenticate =  async (req, res, next) => {
    try {
        const recommendData = await RecommendationCode.find();
        // console.log("source code:"+codeUser)

        if(!recommendData){ 
            console.log("Recommend Data not found");
        }

        req.recommendData = recommendData;
        console.log("Code "+req.recommendData);

        next();
    } catch (error) {
        res.status(401).send("Unauthorizes:no Code provide");
      }
    }

    module.exports = recommendCodeAuthenticate;
