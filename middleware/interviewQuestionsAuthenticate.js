const InterviewQuestionsCode = require('../model/interviewQuestionsSchema');

const interviewQuestionsAuthenticate =  async (req, res, next) => {
    try {
        let param = req.query.filter;
            const interviewQuestionData = await InterviewQuestionsCode.find();
    
        

        if(!interviewQuestionData){  
            console.log("interview Question Data not found");
        }

        req.interviewQuestionData = interviewQuestionData;
        console.log("Code "+req.interviewQuestionData);

        next();
    } catch (error) {
        res.status(401).send("Unauthorizes:no question Code provide");
      }
    }
    module.exports = interviewQuestionsAuthenticate;