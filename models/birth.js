const { Schema, model } = require("mongoose");

const BirthSchema = new Schema(
  {

  
    fisrtName: {
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
    gender: {
        type: String,
        required: true
      },
      father:{
        firstName,lastName,birthPlace,nationalId,address 
      },
      mother:{
        firstName,lastName,birthPlace,nationalId,address 
      },
      photo:{
        data:Buffer,
        contentType:String
    },
      birthEntryNo:{
        type: String
      },
      dateOfRegistration:{

      },
      nameOfOfficer:{
        type: String
      },
      anomaly:{
        type: String
      },
      country:{
        type: String
      },
      
     }, 
     { timestamps: true }
);

module.exports = model("BirthCertificate", BirthSchema);
