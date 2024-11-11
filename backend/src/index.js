const dotenv=require('dotenv');
const connectDB = require("./db/db");
const express=require("express");
const app=express();

dotenv.config();
connectDB()
.then(()=>{
    app.on("error",(error)=>{
                    console.log("Error",erroe);
                    throw error;
                });
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`Server is running at port:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log('MONGODB CONNECTION FAILED!',err);
    
})

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