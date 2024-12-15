import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.db_API_KEY);
        console.log("Connected to database");    
    }catch(e){
        console.error("Error connecting to database", e.message);
    }
    
};



export default connectDB;