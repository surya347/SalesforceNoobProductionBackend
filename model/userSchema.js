const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim :true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
        trim : true,
    
      },
      phone: {
        type: Number,
        // unique : true,
        required: true,
      },
      password: {
        type: String,
        required: true,
        trim : true, 
      },
      cpassword: {
        type: String,
        required: true,
        trim : true,
      },
      filename : {
        type: String,
    },
    contentType: {
        type: String,
       
    },
    imageBase64 : {
        type: String,
        
    },
      tokens: [
        {
            token: {
              type: String,
              required: true,
            }
        }
    ]
    
});

/**--Password hashing---- */
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 12);
      this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
  });


  /**--JWT generation-------- */
  userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id :this._id},process.env.SECRET_KEY);            //jwt sign method take two param sign(payload,secretKey)
        this.tokens = this.tokens.concat({token:token});     //storing jwt tokens into DB
        await this.save();
        return token;
    } catch (error) {
        console.log("e:"+error);
    }
}

/**--Creating Collections/Models-- */
const Users = mongoose.model.userSchema || mongoose.model("USERS", userSchema);

module.exports = Users; 