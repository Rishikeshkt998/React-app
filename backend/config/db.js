const mongoose=require('mongoose')
require('dotenv').config();
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connected:${conn.connection.host}`)

    }catch(error){
        console.error(`Error:${error.message}`)
        process.exit()

    }
}

module.exports=connectDB