const subcategoryModel = require("../models/subCategoryModel");
module.exports={

    /*****create a catgory*****/
    create : async (req,res) =>{
        {
            const subCategory= new  subcategoryModel (req.body)
            await subCategory.save(req.body,(err,item)=>{
                if(err){
                    res.status(400).json({
                        message: "error",
                        success :false,
                        err,
                        data:null,
                    });
                }else{
                    res.status(201).json({
                        message:"success to create subcategory",
                        success:true,
                        data : item
                    });
                }
            })

        }
    },

    /*****to get the list of the categories*****/

    ListSubCategories : async (req,res) =>{
        try{
            const subCategory  =await subcategoryModel.find({});
            res.status(200).json({
                message: "LIST SUBCATEGORIES",
                success : true,
                data : subCategory,
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
    updateSubCategor : async (req,res) =>{
        try{
            const subCategory  =await subcategoryModel.findByIdAndUpdate(req.params.id,req.body);
            res.status(200).json({
                message: "update",
                success : true,
                data : subCategory,
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


    deleteSubCategor : async (req,res) =>{
        try{
            await subcategoryModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "delete subCategory",
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

    /*******to get the value of a key according to an id ******/


    getSubCatego : async (req,res) =>{
        try{
            const subCategory  =await subcategoryModel.findById(req.params.id);
            res.status(200).json({
                message: "get subCat by id",
                success : true,
                data :subCategory,
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