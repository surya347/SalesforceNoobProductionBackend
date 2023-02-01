const SourceCode = require('../model/codeSchema');

const sourceCodeAuthenticate =  async (req, res, next) => {
    try {
        const codeUser = await SourceCode.find();
        // console.log("source code:"+codeUser)

        if(!codeUser){
            console.log("Code not found");
        }

        req.codeUser = codeUser; 
        req.codeId = codeUser._id;
        // console.log("Code "+req.codeUser);

        next();
    } catch (error) {
        res.status(401).send("Unauthorizes:no Code provide");
      }
    }

    module.exports = sourceCodeAuthenticate;