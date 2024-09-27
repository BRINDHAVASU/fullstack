import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const mongodb_url = process.env.MONGODB_URL;
const connectDb = async(req,res) => {
    try{
        const connection = await mongoose.connect(mongodb_url);
        console.log("mongodb connection successful");
        return connection;
    }
    catch(error){
        console.log(error);
        res
        .status(500)
        .json({message: "Internal server error in mongoose connection "});
    }
};
export default connectDb;