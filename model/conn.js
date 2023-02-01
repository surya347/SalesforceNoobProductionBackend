const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);
//mongoDb connection
mongoose.connect(DB,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }).then(()=>{
    console.log("db connection successful");
  }).catch((err)=>{
    console.log(`db connection unsuccessful ${err}`);
  });