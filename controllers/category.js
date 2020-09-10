const Category= require('../models/category');
const {errorHandler} =require('../helpers/dbErrorHandler');



//CategoryById Midldlware
exports.categoryById=(req,res,next,id)=>{
        Category.findById(id).exec((err,category)=>{
            if(err || !category){
                return res.status(400).json({
                        error: 'Category doesnt exist!'
                     });
            }
    
            req.category =category;
            next();
    
        })
    
    };
//update Category
exports.updateCategory=(req,res)=>{
    const category=req.category
    category.name=req.body.name
    category.save((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }

        res.json(data)
    })
}
//remove Category

exports.deleteCategory=(req,res)=>{
    const category=req.category
   
    category.remove((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }

        res.json({
            "message": "Category deleted!"
        })
    })
}

//list all categories
exports.list=(req,res)=>{
    Category.find().exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }

        res.json(data);
    })

}

    



//Create new category
exports.create = (req,res)=>{
    const category= new Category(req.body)
    category.save((err,data)=>{
        if(err){
                return res.status(400).json({
                   error: errorHandler(err)
                });
        }
        res.json({data});
        
})
};

//read single category
exports.read=(req,res)=>{
        req.category.photo=undefined;
        return res.json(req.category);
    
    };