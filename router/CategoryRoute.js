const categoryController =require ('../controllers/categoryController');
const route = require ("express").Router();
route.post('/', categoryController.create)
route.get('/',categoryController.ListCategories)
route.put('/:id',categoryController.updateCategor)
route.delete('/:id',categoryController.deleteCategory)
route.get('/:id',categoryController.categoryGet)
module.exports = route