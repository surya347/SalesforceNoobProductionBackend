const BlogsCode = require('../model/blogsSchema');

const blogsAuthenticate =  async (req, res, next) => {
    try {
            const allBlogsData = await BlogsCode.find();

        if(!allBlogsData){  
            console.log("interview Question Data not found");
        }

        req.allBlogsData = allBlogsData;
        console.log("Code "+req.allBlogsData);

        next();
    } catch (error) {
        res.status(401).send("Unauthorizes:no question Code provide");
      }
    }
    module.exports = blogsAuthenticate;