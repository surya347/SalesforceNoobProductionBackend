const BlogsCode = require('../model/blogsSchema');

const blogsAuthenticateFilter =  async (req, res, next) => {
    try {
        let param = req.query.filter;
            const allBlogsDataFilter = await BlogsCode.findOne({
                headerApi:req.query.filter
            });

        if(!allBlogsDataFilter){  
            console.log("interview Question Data not found");
        }

        req.allBlogsDataFilter = allBlogsDataFilter;
        console.log("Code "+req.allBlogsDataFilter);

        next();
    } catch (error) {
        res.status(401).send("Unauthorizes:no question Code provide");
      }
    }
    module.exports = blogsAuthenticateFilter