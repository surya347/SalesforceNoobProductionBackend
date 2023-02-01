const SourceCode = require('../model/codeSchema');

const codeDetailAuthenticate =  async (req, res, next) => {
    // console.log("reqs:"+JSON.stringify(req));
    console.log("reqs called:");

    let param = req.query.userId;
    console.log("req:"+JSON.stringify(param));
 console.log("geg:"+JSON.stringify(req.query.userId));
//  console.log("api:"+JSON.stringify(req.query.codeApi));

    try {
        const codeUser = await SourceCode.findOne({
            topicApi: req.query.userId
        });
        // console.log("source code:"+codeUser)

        if(!codeUser){
            console.log("Code not found");
        }

        req.codeUser = codeUser;
        req.codeId = codeUser._id;
        req.codeTopic = codeUser.topic;
        console.log("codeTopic:"+req.codeTopic);
        // console.log("req.codeUser:"+req.codeUser);

        next();
    } catch (error) {
        res.status(401).send("Unauthorizes:no Code provide");
      }
    }

    module.exports = codeDetailAuthenticate;