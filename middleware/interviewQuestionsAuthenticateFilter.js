const InterviewQuestionsCode = require('../model/interviewQuestionsSchema');

const interviewQuestionsAuthenticate =  async (req, res, next) => {
    try {
        let param = req.query.filter;
            const interviewQuestionDataFilter = await InterviewQuestionsCode.find({
                filterApi:req.query.filter
        });
    

        if(!interviewQuestionDataFilter){  
            console.log("interview Question Data not found");
        }

        req.interviewQuestionDataFilter = interviewQuestionDataFilter;
        console.log("Code "+req.interviewQuestionDataFilter);

        next();
    } catch (error) {
        res.status(401).send("Unauthorizes:no question Code provide");
      }
    }
    module.exports = interviewQuestionsAuthenticate;