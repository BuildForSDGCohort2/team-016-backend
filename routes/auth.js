const express =require('express');
const router=express.Router();
const {signUp,signIn,signOut,requireSignin}=require('../controllers/auth');
const {validatorArray,userSignUpValidator}=require('../validator')



router.post('/signup',validatorArray,userSignUpValidator,signUp);
router.post('/signin',signIn);
router.get('/signout',signOut);

/*router.get("/test",requireSignin,(req,res)=>{
  res.send("Hello there!")
})*/

  module.exports=router;