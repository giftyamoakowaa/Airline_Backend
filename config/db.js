import mongoose from "mongoose";
import "dotenv/config";

const connectionString = process.env.mongo_url;

export const dbconnection = async() =>{
try{
    await mongoose.connect(connectionString)
    console.log('Database is connected')
} catch (error) {
    console.log(error)
}
};