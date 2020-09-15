const mongoose= require("mongoose");
const crypto = require("crypto");
const {v4:uuidv4} =require("uuid");


const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    lastName:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    email:{
        type:String,
        trim:true,
        required:true,
       unique:true
    },
    hashed_password:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
      trim:true
    },
    salt:String,
    country:{
        type:String,
      trim:true
    },
    province:{
        type:String,
        trim:true   
    },
    district:{
        type:String,
        trim:true   
    },
    village:{
        type:String,
        trim:true   
    }


},{timestamps:true});

//virtual field

userSchema.virtual("password")
.set(function(password){
    this._password=password
    this.salt=uuidv4();
    this.hashed_password=this.encryptPassword(password)
})
.get(function(){
    return this._password;
})

userSchema.methods={
   authenticate:function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password;
   },

    encryptPassword:function(password){
        if(!password) return "";
        try{
            return crypto.createHmac("sha1",this.salt)
                          .update(password)
                          .digest("hex")
        }catch(err){
            return ""
        }
    }
}


module.exports=mongoose.model("User",userSchema);