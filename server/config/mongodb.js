import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_URI}/imagify`);
};

mongoose.connection.on('connected', () => {
  console.log("Database Connected");
});

export default connectDB;
