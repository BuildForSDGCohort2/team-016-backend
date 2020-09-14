const express =require('express');
const router=express.Router();

const {create,certificateId,read,deleteCertificate,updateCertificate,list}=require('../controllers/certificate.js');
const {requireSignin,isAuth,isAgent,isAdmin}=require('../controllers/auth');
const {userById}=require('../controllers/user');

router.get('/certificate/:certificateId',read);
router.delete('/certificate/:certificateId/:userId',requireSignin,isAuth,deleteCertificate);
router.put('/certificate/:certificateId/:userId',requireSignin,isAuth,updateCertificate);
router.post('/certificate/create/:userId',requireSignin,isAuth,create);
router.get('/certificates',isAdmin,list);

router.param('userId',userById);
router.param('certificateId',certificateId);


module.exports=router;