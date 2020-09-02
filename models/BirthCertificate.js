const { Schema, model } = require("mongoose");

const BirthSchema = new Schema(
  {


   birthNumber: {
      type: String,
      required: true
    },
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
        enum: ["female", "male"],
        required: true
      },
      father:{
        firstName:{
          type: String
        },
        lastName:{
          type: String
        },
        birthPlace:{
          type: String
        },nationalId: {
          type: String
        },address: {
          type: String
        } 
      },
      mother:{
        firstName:{
          type: String
        },
        lastName:{
          type: String
        },
        birthPlace:{
          type: String
        },nationalId: {
          type: String
        },address: {
          type: String
        } 
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
      }
     }, 
     { timestamps: true }
);

module.exports = model("birthCertificate", BirthSchema);
