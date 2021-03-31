const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://beathunger3435:beathunger@cluster0.kat9b.mongodb.net/Beathunger?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection successfull`);
}).catch((e)=>{ 
    console.log(`no connection`);
}) 
