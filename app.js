// Basic Lib Import
const express =require('express');
const router =require('./src/routes/api');
const app= new express();


// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const hpp =require('hpp');
const cors =require('cors');


// Database Lib Import
const mongoose =require('mongoose');


// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())








app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));








// Request Rate Limit
const limiter=rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)








// Mongo DB Database Connection


try{
    let URI="mongodb+srv://akash:<password>@cluster0.epuw6z9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let OPTION={user:'akash',pass:'akash123',autoIndex:true}
    mongoose.connect(URI,OPTION);
}
catch(err){
    console.log(err)
}








// Routing Implement
app.use("/api/v1",router)


// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})
module.exports=app;

