const mongoose = require('mongoose');
const url = "mongodb://0.0.0.0:27017/ecommerce";

mongoose.connect(url,(err,client)=>{
    if(err)console.log("Erreur de connexion" + err)
    else{
        console.log('Connected!')
    }});

