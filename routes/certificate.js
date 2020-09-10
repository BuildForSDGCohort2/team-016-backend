const express =require('express');
const router=express.Router();

const {create,certificateId,read,deleteCertificate,updateCertificate,list}=require('../controllers/certificate.js');
const {requireSignin,isAuth,isAdmin}=require('../controllers/auth');
const {userById}=require('../controllers/user');

router.get('/certificate/:certificateId',read);
router.delete('/certificate/:certificateId/:userId',requireSignin,isAuth,isAdmin,deleteCertificate);
router.put('/certificate/:certificateId/:userId',requireSignin,isAuth,isAdmin,updateCertificate);
router.post('/certificate/create/:userId',create);
router.get('/certificates',list);

router.param('userId',userById);
router.param('certificateId',certificateId);


module.exports=router;