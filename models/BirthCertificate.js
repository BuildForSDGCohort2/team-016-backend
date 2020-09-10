const { Schema, model } = require("mongoose");
const mongoose= require('mongoose');
const {ObjectId}= mongoose.Schema;

const BirthSchema = new Schema(
  {
    
  
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
     
    },
    birthPlace: {
      type: String,
      required: true
    },
    dob: {
      type: Date,
      required: true
    },
    category:{
      type:ObjectId,
      ref:'Category',
      required:true
  },
  birthEntryNo:{
    type: String
  },
 
 
  anomaly:{
    type: String
  },
  country:{
    type: String
  }/* ,
  photo:{
    data:Buffer,
    contentType:String
}, */
      
     }, 
     { timestamps: true }
);

module.exports = model("BirthCertificate", BirthSchema);
