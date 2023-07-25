const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/demo")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed'+e);
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('data',logInSchema)

module.exports=LogInCollection
//mongodb+srv://noor:<password>@cluster0.szi2hzq.mongodb.net/
//noor55