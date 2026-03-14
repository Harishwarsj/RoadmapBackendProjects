import mongoose  from "mongoose";
const connectDB = async () => {
   if (!process.env.MONGO_URI) {
     throw new Error("MONGO_URI is not defined in environment");
   }

   try {
    // newer mongoose versions ignore these options; they cause errors if included
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
   } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // let caller handle the failure
   }
};
console.log(connectDB);
export default connectDB;


