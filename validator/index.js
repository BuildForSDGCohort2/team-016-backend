const {check,validationResult} = require('express-validator');

const validatorArray=[
    check('name','Name is required').notEmpty(),
    check('email','The email address is invalid!').isEmail(),
    check('password','Password is required').notEmpty(),
    check('password').
    isLength({ min:6})
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage("Password must contain a number")];




userSignUpValidator= (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()[0].msg});
    }
    next();
}
    
module.exports={validatorArray,userSignUpValidator}