const  mongoose  = require("mongoose");

const subcategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required : true,
            trim:true,
            unique :true
        }
    },{timestamps:true}
);
module.exports=mongoose.model("subcategories", subcategorySchema)


