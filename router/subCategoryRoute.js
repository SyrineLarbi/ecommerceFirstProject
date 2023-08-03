const subCategoryController = require ("../controllers/SubCategoryControllers")
const route = require ("express").Router();
//create//
route.post("/",subCategoryController.create)
//-----get list--//
route.get("/",subCategoryController.ListSubCategories)

//---update---/ 
route.put('/:id',subCategoryController.updateSubCategor)

//----delete----//
route.delete("/:id",subCategoryController.deleteSubCategor)


//-----get by id---//
route.get("/:id",subCategoryController.getSubCatego);

module.exports = route