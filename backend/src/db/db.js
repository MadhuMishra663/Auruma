const mongoose =require("mongoose");
const DB_NAME=require("../constants");

const connectDB= async ()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`http://localhost/${process.env.PORT}`); //connection Instance is [object object]
        
       
       
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR",error);
        process.exit(1);
        
    }
}

module.exports = connectDB;
