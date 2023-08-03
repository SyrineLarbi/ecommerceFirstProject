require("./db");
var express= require ("express");
const app = express();
const categoryRouter = require ("./router/CategoryRoute")
const subCategoryRouter = require ("./router/subCategoryRoute")

app.use(express.json());

app.use('/categories',categoryRouter);
app.use('/subCategories',subCategoryRouter);

const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server runing on port : ${PORT}`);
})
