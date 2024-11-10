const dotenv=require('dotenv');
const connectDB = require("./db/db");
dotenv.config();
connectDB();

// const express=require("express");
// const app=express();
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Error",erroe);
//             throw error;
//         });
//         app.listen(process.env.PORT,()=>{
//             console.log(`http://localhost:${process.env.PORT}}`);
            
//         })
//     } catch (error) {
//         console.error("ERROR",error)
//         throw error;
//     }
// })()