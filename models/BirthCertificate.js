const { Schema, model } = require("mongoose");
const mongoose= require('mongoose');
const {ObjectId}= mongoose.Schema;

const BirthSchema = new Schema(
  {
    
    fisrtName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
     
    },
    bornInHospital: {
      type: Boolean,
      required: true
    },
    dob: {
      type: Date,
      required: true
    },
    gender: {
        type: String,
        required: true
      },
      fatherName:{
        type: String,
        required: true
      },
      motherName:{
        type: String,
        required: true
      },
      height:{
        type:Number,
        required: true
    },
    weight:{
      type:Number,
      required: true
  },
     
      anomalies:{
        type: String
      },
      comments:{
        type: String
      },
      country:{
        type: String
      },
      province:{
        type: String
      },
      district:{
        type: String
      },
       village:{
        type: String
      }
      
     }, 
     { timestamps: true }
);

module.exports = model("BirthCertificate", BirthSchema);
