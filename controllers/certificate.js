const formidable =require('formidable');
const fs=require('fs');
const _=require('lodash');
const BirthCertificate= require('../models/BirthCertificate');
const { errorHandler } = require('../helpers/dbErrorHandler');


//certificateId Midldleware
exports.certificateId=(req,res,next,id)=>{
    BirthCertificate.findById(id).exec((err,certificate)=>{
        if(err || !certificate){
            return res.status(400).json({
                error: "Certificate not found!"
            });
        }

        req.certificate =certificate;
        next();

    })

};


//read the certificate from DB

exports.read=(req,res)=>{
    req.certificate.photo=undefined;//upload applicant image//if age is 18 consider ID application
    return res.json(req.certificate)

};

//delete certificate
exports.deleteCertificate=(req,res)=>{
   let certificate=req.certificate ;
   certificate.remove((err,deleteCertificate)=>{
    if(err){
        return res.status(400).json({
            error:errorHandler(err)
        }); 
    }

    res.json({
        "message":"Record deleted successfully!"
    })

})

}

//create Certificate
exports.create = (req,res)=>{

   
const birth= new BirthCertificate(req.body)
birth.save((err,data)=>{
        if(err){
                return res.status(400).json({
                   error: errorHandler(err)
                });
        }
        res.json({data});
        
});
}

 
exports.updateCertificate = (req,res)=>{
    const imageSize=1000000;
    const limit =imageSize/1000000;

 let form =new formidable.IncomingForm();
 form.keepExtensions=true;

 form.parse(req,(err,fields,files)=>{
     if(err){
         return res.status(400).json({
             error:'Image could not be uploaded'
         })
     }
    //check all feilds
    const {fisrtName,lastName,birthPlace}=fields;

 if(!fisrtName || !lastName || !birthPlace ){
    return res.status(400).json({
        error:`All fields are required !`
    })
 }
    
 let certificate= req.certificate;
 certificate=_.extend(certificate,fields)

      certificate.save((err,result)=>{
            if(err){
                return res.status(400).json({
                    error:errorHandler(err)
                });
            }

            res.json(result);
      });  

 });


};

//retrieve all certificates


exports.list=(req,res)=>{
    let order=req.query.order?req.query.order:'asc';
    let sortBy=req.query.sortBy?req.query.sortBy:'_id';
    let limit=req.query.limit?parseInt(req.query.limit,10):6;

 BirthCertificate.find()
 .select("-photo")
 .populate('category')
 .sort([[sortBy,order]])
 .limit(limit)
 .exec((err,certificates)=>{
     if(err){
         return res.status(400).json({
           error:'No Certificates  found'  
         })
     }

     res.send(certificates)
 })

}
