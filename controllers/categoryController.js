const mongoose = require ("mongoose");
const Category =require ("../models/categoryModel");
const categoryModel = require("../models/categoryModel");

//create a new category

// createCategory = (req,res)=> {
//     const category = new Category(req.body);
//     r(eturn category.save();
// }
module.exports= {
        /*****create a catgory*****/

    create : async (req, res) =>{
         {
            const category = new Category(req.body)
            await category.save(req.body, (err ,item)=>{
                if(err){
                    res.status(400).json({
                        message: "error",
                        success :false,
                        err,
                        data:null,
                    });
                }else{
                    res.status(201).json({
                        message:"success to create category",
                        success:true,
                        data : item
                    });
                }
            });
         }
    },

        /*****to get the list of the categories*****/

    ListCategories : async (req,res) =>{
        try{
            const category  =await categoryModel.find({});
            res.status(200).json({
                message: "LIST CATEGORIES",
                success : true,
                data : category,
            });
        } catch (error) {
            res.status(400).json({
                message: "error",
                success :false,
                error,
                data:null,
            });
        }
    },

        /*****to update a key value according to the id****/
    updateCategor: async(req,res) =>{
        try{
            const category  =await categoryModel.findByIdAndUpdate(req.params.id,req.body);
            res.status(200).json({
                message: "LIST CATEGORIES",
                success : true,
                data : category,
            });
        } catch (error) {
            res.status(400).json({
                message: "error",
                success :false,
                error,
                data:null,
            });
        }
    },

        /******to delete a key value *******/
    deleteCategory : async (req,res) =>{
        try{
            await categoryModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "LIST CATEGORIES",
                success : true,
                
            });
        } catch (error) {
            res.status(400).json({
                message: "error",
                success :false,
                error,
            
            });
        }
    },
    categoryGet:async(req,res)=>{
        try{
            const category  =await categoryModel.findById(req.params.id);
            res.status(200).json({
                message: "LIST CATEGORIES",
                success : true,
                data : category,
            });
        } catch (error) {
            res.status(400).json({
                message: "error",
                success :false,
                error,
                data:null,
            });
        }
    }
}

